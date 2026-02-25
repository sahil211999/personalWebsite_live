exports.handler = async (event) => {
    try {
      if (event.httpMethod !== "POST") {
        return {
          statusCode: 405,
          body: "Method Not Allowed",
        };
      }
  
      const { message } = JSON.parse(event.body || "{}");
  
      if (!message) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: "Missing message" }),
        };
      }
  
      const apiKey = process.env.OPENAI_API_KEY;

      if (!apiKey) {
        return {
          statusCode: 500,
          body: JSON.stringify({
            error:
              "Missing OPENAI_API_KEY environment variable. Set this in your Netlify site settings.",
          }),
        };
      }
  
      const profile = `With nearly 3 years of industry experience as a software engineer, I have built and shipped production systems spanning full-stack development, distributed microservices, and cloud infrastructure. 
      More recently, my work has evolved toward machine learning and AI — from building semantic search pipelines and RAG systems to conducting NLP research. 
      I am passionate about leveraging my strong engineering foundation to build intelligent, scalable AI-driven products. 
      Engineered a semantic image retrieval pipeline by generating embedding vectors and indexing them in a vector database optimized for k-Nearest Neighbor (k-NN) similarity search. 
      Implemented a query embedding and similarity matching flow using cosine distance to return top-K nearest neighbors with high semantic relevance. Fine-tuned a debiasing layer to sanitize incoming queries, mitigating biased or out-of-scope search patterns. 
      Designed a Retrieval-Augmented Generation (RAG) system combining vector-based semantic retrieval with LLM generation, enabling grounded question answering over domain-specific evidence data with relevance filtering and safety constraints. 
      Developed a new Golang microservice to enable evidence search, replacing a legacy Scala-based microservice. Enhanced search functionality by optimizing the Solr search architecture across Axon products, achieving a 20% reduction in query response time. Designed and implemented an asynchronous cron job system using Azure Service Bus to manage task queues for large-scale search indexing workflows. Managed monthly production releases on Azure Kubernetes Service (AKS) and administered Kubernetes clusters including resource allocation, autoscaling, and configuration of namespaces, deployments, and services.
      Developed multiple APIs on AWS QLDB and Brazil (a framework similar to Java SpringBoot) for service escalation diagnostics, reducing weekly on-call diagnostic time. Created a pipeline to extract macro and micro level data about customer usage behavior for the EC2 launch templates team. Developed the internal architecture to manage access and metrics for the APIs to be callable by more than 10 teams under AWS EC2 core.
      Worked on the account onboarding team in Asset Management. Developed APIs and a tracking dashboard to streamline and track the account onboarding process for asset management clients using SpringBoot, RxJava, and React, leading to a 4-hour weekly reduction in time spent on manual account onboarding and reducing onboarding time by 30%. Wrote unit tests and release tests using JUnit and Mockito to release the feature into production for dozens of Goldman Asset-Management clients.
      Developed, tested, and designed software in collaboration with UX designers and business analysts in an Agile environment. Built a native iOS and Android application for Cargill Risk Management, allowing traders to view positions. Developed a responsive web app for animal feed mills on the React, Bootstrap, and .NET Core stack to provide clients with an improved shopping experience. Created a web app for a hardware-based project to improve order accuracy in quick service restaurants by 50% — a prototype potentially to be used by YUM Brands. Built a truck delivery driver app in Flask that generates optimized routes using the Maps API and the traveling salesman algorithm.
      Formulated sentiment analysis as a supervised text classification task, engineering Bag-of-Words and TF-IDF features and establishing strong probabilistic baselines (Naive Bayes) for comparison. Designed and executed controlled experiments benchmarking classical models against PyTorch-based neural networks, using consistent evaluation protocols to analyze generalization. Built an end-to-end, reproducible experimentation pipeline in PyTorch for training, validation, and metrics tracking, evaluating models with precision, recall, F1, and inference efficiency tradeoffs.
      `;
  
      const system = `
  You answer questions about Sahil’s professional background.
  Use ONLY the provided context.
  If not present, say you don't know. Don't make up information. If there are questions unrelated to the context, say Sahil has only trained me to answer questions related to him ':)' .
  Be concise and recruiter-friendly.
  `;
  
      const prompt = `Context:\n${profile}\n\nQuestion:\n${message}`;
  
      const r = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          input: [
            { role: "system", content: system },
            { role: "user", content: prompt },
          ],
          temperature: 0.2,
        }),
      });
  
      const data = await r.json();

      if (!r.ok) {
        return {
          statusCode: r.status,
          body: JSON.stringify({
            error:
              (data && data.error && (data.error.message || data.error)) ||
              `Upstream error with status ${r.status}`,
          }),
        };
      }

      let answer = "";

      if (Array.isArray(data.output)) {
        const textChunks = [];

        for (const item of data.output) {
          if (!item || !Array.isArray(item.content)) continue;

          for (const part of item.content) {
            if (part == null) continue;

            if (part.type === "output_text" && typeof part.text === "string") {
              textChunks.push(part.text);
            } else if (
              part.type === "output_text" &&
              part.output_text &&
              typeof part.output_text.text === "string"
            ) {
              textChunks.push(part.output_text.text);
            } else if (part.text && typeof part.text.value === "string") {
              textChunks.push(part.text.value);
            }
          }
        }

        answer = textChunks.join("\n").trim();
      }

      if (!answer && typeof data.output_text === "string") {
        answer = data.output_text.trim();
      }

      if (!answer) {
        answer = "Sorry — I couldn't generate a response.";
      }

      return {
        statusCode: 200,
        body: JSON.stringify({
          answer,
        }),
      };
    } catch (e) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: String(e) }),
      };
    }
  };