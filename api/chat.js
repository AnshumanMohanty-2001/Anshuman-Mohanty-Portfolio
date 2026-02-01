// api/chat.js
import Groq from "groq-sdk";

// Initialize Groq
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { message } = req.body;
  // RESUME DATA
  const RESUME_DATA = `
Name: Anshuman Mohanty
Contact: +1 (213) 234 8137 | anshumohanty2002@gmail.com | LinkedIn | Github | Portfolio

EDUCATION
University of Southern California | Los Angeles, CA
Master of Science in Applied Data Science, GPA: 3.74 | Aug 2023 – May 2025
Relevant Coursework: Strategy, Research Methods and Analysis for User Studies, Python Programming, Database Management, Machine Learning, Data Mining, User Experience Research

VIT University | Chennai, India
Bachelor of Technology in Computer Science and Engineering (Specialization: AI and ML), GPA: 3.63 | July 2019 – May 2023

WORK EXPERIENCE
Klickly | Los Angeles, CA
Data Science Intern | June 2025 – Present
- Built Sigma dashboards by querying data from Snowflake using SQL queries to perform in-depth data analysis on sales performance, identifying key business trends for stakeholders.
- Developing a new ad optimization algorithm based on contextual bandits to provide personalized advertisements to individual consumers, with the primary objective of significantly improving click-through rates (CTR) and maximizing ad effectiveness.
- Proposed ad optimization algorithm achieved a 12% higher CTR on average than the existing approach.
- Managed and executed 20+ data requests from diverse stakeholders, reliably providing actionable insights to inform critical business decisions.
- Analyzed 5 years of Black Friday/Cyber Monday campaign performance data at Klickly, identifying critical purchase trends and seasonal spending shifts to inform strategic planning for Thanksgiving in 2025.

Dr. Reddy's Laboratories | Princeton, NJ
Data Analytics Intern | July 2024 – Aug 2024
- Collaborated with a team to optimize inventory levels for 250 pharmaceutical products by using Excel to perform K-means clustering and conducting multiple regression within clusters to identify correlation of 6 Supply Chain KPIs (e.g., Forecast Accuracy, Backorder Value, Lead Time, MOQs) affecting Months on Hand (MOH).
- Developed and presented Power BI dashboard to stakeholders, showcasing findings that led to projected 12% reduction in inventory costs.

Quadratyx | Hyderabad, India
Data Science Intern | June 2022 – Sept 2022
- Engineered a data extraction pipeline using Python (pytesseract) for processing 100+ bank forms and passports.
- Implemented and deployed solution on AWS Sagemaker, achieved 87% confidence in Levenshtein Distance metric.

SKILLS
AI/ML/GenAI: Deep Learning, Machine Learning, Natural Language Processing (NLP), Sentiment Analysis, Recommender Systems, Transformer Models (DistilBERT), Time Series Forecasting, Feature Engineering, Data Mining, A/B Testing
Frameworks: TensorFlow, PyTorch, Keras, Scikit-Learn, SciPy, Hugging Face Transformers, OpenCV, Spark (PySpark), Hadoop
Languages: Python, SQL (MySQL), Scala
Databases: MongoDB, Firebase, Amazon DynamoDB, MySQL, Snowflake
Tools & Platforms: Git, Power BI, Excel, AWS (EC2, Sagemaker), GCP, Flask, Django

PROJECTS
EchoFilter: AI-Powered Personal Audio Firewall | Python | Apr 2025 – May 2025
- Designed and implemented EchoFilter, a modular system that transcribes ambient audio using Faster-Whisper ASR and detects, explains, and redacts sensitive content (e.g., mental health, bullying) from transcripts.
- Developed NLP pipeline combining semantic and contextual understanding for category classification using MPNet Sentence Transformers, severity assessment via Flan-T5, and rationale generation using Phi-2; deployed system with Streamlit Cloud.

Classifying Human vs. LLM-Generated Text Using Transformer Models | Python | Mar 2025 – Apr 2025
- Developed an advanced NLP preprocessing pipeline (processing missing data, unicode normalization, contraction expansion, stop word removal, lemmatization) for classifying 30,000 essays.
- Engineered and evaluated multiple models, achieving a state-of-the-art accuracy of 99.82% with DistilBERT, significantly outperforming traditional ML and other DL approaches.

XGBoost-based Recommendation System for Yelp Reviews | Python | Aug 2024 – Dec 2024
- Built a robust recommender system using XGBoost on PySpark for large dataset (450,000 records), incorporating sophisticated feature engineering techniques.
- Optimized model performance via hyperparameter tuning (Optuna), achieved test RMSE of 97.35 and ranked 5th among 250 students.

Leveraging Database Solutions for Hotel Management | Python, MongoDB | Jan 2024 – May 2024
- Developed a full-stack Flask web application to streamline hotel booking and management operations.
- Optimized database performance for 80,000 records using hashing and ensured high availability through the implementation of 3 replica sets in MongoDB.

PUBLICATIONS
Zero-DCE++ Inspired Object Detection in Less Illuminated Environment Using Improved YOLOv5
- Enhanced poorly-lit images with Zero-DCE++; optimized YOLOv5s for improved night-time road object detection.
- Obtained mAP score 5.3% higher with 0.9 million parameters fewer than baseline YOLOv5s thus leading to both accurate results and faster prediction time; presented results to industry experts for evaluation.

A Hybrid Deep Learning Framework with CNN and Bi-directional LSTM for Store Item Demand Forecasting
- Devised CNN-BiLSTM framework for time series sales prediction across 50 products and 10 stores.
- Obtained Mean Absolute Error of 6.7, R2 Score of 0.85, outperformed all existing research approaches.
`;

try {
        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `You are a professional portfolio assistant for Anshuman Mohanty. 
                    Strictly base your answers on the following resume context. 
                    If the answer is not in the context, say "I don't have that information."
                    Keep answers professional and concise.
                    
                    RESUME CONTEXT:
                    ${RESUME_DATA}`
                },
                {
                    role: "user",
                    content: message
                }
            ],
            // "llama3-8b-8192" is fast, free, and smart enough for resumes
            model: "llama-3.3-70b-versatile", 
        });

        const reply = completion.choices[0]?.message?.content || "No response generated.";
        
        res.status(200).json({ reply });

    } catch (error) {
        console.error('Groq API Error:', error);
        res.status(500).json({ error: 'Failed to fetch response' });
    }
}