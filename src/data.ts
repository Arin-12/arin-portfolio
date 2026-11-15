export interface Link { label: string; url: string; primary?: boolean }
export interface Project {
  id: string; title: string; period: string; kind: string; status?: string;
  summary: string; problem: string; approach: string[]; architecture: string[];
  result: string; stack: string[]; metric?: { value: string; label: string }; links: Link[];
}

export const LINKS = {
  email: "arinjain1122@gmail.com",
  github: "https://github.com/Arin-12",
  linkedin: "https://www.linkedin.com/in/arinjain-ai/",
  resume: "https://drive.google.com/file/d/1nqQgEIIi9xH3gloyRzEJqqUx3atnmsWg/view?usp=sharing",
};

export const projects: Project[] = [
  {
    id: "researchforge", title: "ResearchForge AI", period: "2026", kind: "Multi-agent system",
    summary: "A multi-agent research assistant that discovers papers and datasets, analyses the literature and produces a reviewed research report.",
    problem: "Researchers and students lose time switching between arXiv, Kaggle, Hugging Face, UCI and OpenML to find papers and datasets, check citations, review literature and spot research gaps.",
    approach: [
      "Built four specialised agents with Google ADK: Research, Analysis, Report and Reviewer.",
      "Added tools for paper search, dataset discovery and citation validation.",
      "Ran Groq-hosted models through LiteLLM, with retry and recovery handling for rate limits and temporary API failures.",
      "Generated structured Markdown reports. Two sample reports are included in the repo.",
    ],
    architecture: ["Research topic", "Research Agent (papers, datasets)", "Analysis Agent (literature, gaps)", "Report Agent (Markdown report)", "Reviewer Agent (quality, citations)"],
    result: "Turns a single research topic into a structured report with references, research gaps and suggested directions, then reviews its own citations.",
    stack: ["Google ADK", "Groq", "LiteLLM", "Python", "arXiv", "Markdown reports"],
    metric: { value: "4 agents", label: "research, analysis, report and reviewer" },
    links: [
      { label: "View code", url: "https://github.com/Arin-12/ResearchForge-AI", primary: true },
      { label: "Kaggle notebook", url: "https://www.kaggle.com/code/arinprashantjain/researchforge-ai" },
    ],
  },
  {
    id: "tenderdesk", title: "Tender Desk", period: "2026", kind: "RAG application",
    summary: "An AI platform that reads construction tender PDFs, answers questions with page-level citations and supports bidding decisions.",
    problem: "Tender documents are long and dense, and key terms such as EMD, deadlines, eligibility and liquidated damages are buried across many pages.",
    approach: [
      "Combined dense BGE embeddings in a per-tender FAISS index with BM25 keyword search, fused with Reciprocal Rank Fusion.",
      "Processed PDFs with page-aware chunking, Tesseract OCR for scanned pages and pdfplumber for tables.",
      "Validated every citation and mapped it back to the original PDF page.",
      "Added structured analysis for key information, eligibility, risks and BOQ, plus tender comparison and PDF export.",
    ],
    architecture: ["Tender PDF upload", "Extraction and OCR", "Page-aware chunking", "FAISS and BM25 retrieval", "RRF fusion", "Grounded answer", "Citation validation"],
    result: "On a manually prepared 30-question benchmark across two tenders, the v4 run reached 30/30 correct answers, 30/30 citation hits and 0.92 citation precision. Retrieval ranking metrics were unchanged from v3, and the benchmark is small.",
    stack: ["Python", "Flask", "FAISS", "BM25", "BGE embeddings", "Groq", "React", "Vite"],
    metric: { value: "30/30", label: "answers correct on a 30-question benchmark" },
    links: [{ label: "View code", url: "https://github.com/Arin-12/tender-desk", primary: true }],
  },
  {
    id: "support", title: "AI Customer Support System using RAG", period: "2026", kind: "RAG and SQL agent",
    summary: "A support assistant that answers from a policy knowledge base, product data and order records, and escalates to a human when needed.",
    problem: "Traditional support bots rely on canned replies and manual help, and they struggle with questions that need policy text, product details or live order data.",
    approach: [
      "Routed each query to the right source: policy and product retrieval, or SQL lookups for customers and orders.",
      "Retrieved policy content with BGE embeddings and FAISS, and tested hybrid retrieval and reranking.",
      "Generated answers with Groq models, scored response confidence and escalated low-confidence or human-requested cases.",
      "Built the backend with FastAPI and a React front end, with PostgreSQL for structured data.",
    ],
    architecture: ["Customer query", "Query router", "RAG or SQL retrieval", "LLM answer", "Confidence check", "Respond or escalate"],
    result: "On the project’s small labelled retrieval set it recorded 100% Recall@5, 100% MRR@5 and 54.17% Precision@5. The test suite reported 136 passing tests.",
    stack: ["Python", "FastAPI", "React", "FAISS", "LangChain", "SQLAlchemy", "PostgreSQL", "Groq", "Pytest"],
    metric: { value: "100%", label: "Recall@5 on the labelled retrieval set" },
    links: [{ label: "View code", url: "https://github.com/Arin-12/AI-Customer-Support-System-RAG", primary: true }],
  },
  {
    id: "accident", title: "Accident Severity Prediction", period: "Sept – Nov 2025", kind: "Machine learning",
    summary: "A multi-class model that predicts accident severity from more than 7 million records.",
    problem: "Severity depends on many mixed signals, and the dataset is too large for naive feature handling.",
    approach: [
      "Built an ML pipeline over 7M+ records.",
      "Engineered features with NLP embeddings and reduced dimensions with PCA.",
      "Trained a LightGBM classifier and served it through a Streamlit dashboard.",
    ],
    architecture: ["7M+ records", "NLP embeddings and PCA", "LightGBM classifier", "Streamlit dashboard"],
    result: "0.92 F1-score and 0.988 AUC, with real-time predictions in the dashboard.",
    stack: ["Python", "LightGBM", "PCA", "Embeddings", "Streamlit"],
    metric: { value: "0.92 F1", label: "0.988 AUC on 7M+ records" },
    links: [{ label: "View code", url: "https://github.com/Arin-12/Accident-Severity-Prediction", primary: true }],
  },
  {
    id: "resume", title: "Smart Resume Screener", period: "Jan 2026", kind: "NLP and deployment",
    summary: "A multimodal ATS that reads resume images or pasted text, scores the match to a job description and explains the score.",
    problem: "Recruiters and students need a fast, understandable check of how well a resume fits a role.",
    approach: [
      "Extracted text from resume images with Tesseract and OpenCV.",
      "Matched resume to job description using skill overlap, experience logic and Sentence-Transformers similarity.",
      "Produced an ATS score, a Strong, Moderate or Low fit label and a downloadable report.",
    ],
    architecture: ["Resume image or text", "OCR (Tesseract, OpenCV)", "Skill extraction", "Semantic matching", "ATS score and report"],
    result: "Live on Streamlit Cloud. The README reports about 2–4 seconds per resume and roughly 85–90% OCR accuracy on clear resumes.",
    stack: ["Python", "Sentence-Transformers", "Tesseract", "OpenCV", "Scikit-learn", "Streamlit"],
    metric: { value: "2–4 s", label: "per resume" },
    links: [
      { label: "Open live demo", url: "https://smart-resume-screener-eeee2dun6rtutk7gjn7er5.streamlit.app/", primary: true },
      { label: "View code", url: "https://github.com/Arin-12/smart-resume-screener" },
    ],
  },
  {
    id: "rag", title: "Agentic RAG Course Planner", period: "Mar 2026", kind: "Generative AI",
    summary: "Answers course-planning questions from a real catalog, cites every claim and declines when the catalog can’t support an answer.",
    problem: "Students ask which courses they can take next. A plain LLM guesses prerequisites and invents courses.",
    approach: [
      "Embedded catalog entries with MiniLM and indexed them in FAISS for semantic retrieval.",
      "Used an LLM to reason about prerequisites, but only from retrieved passages.",
      "Returned citation-backed answers and abstained when retrieval confidence was low.",
    ],
    architecture: ["Course catalog", "MiniLM embeddings", "FAISS retrieval", "LLM prerequisite reasoning", "Cited answer or abstain"],
    result: "100% citation coverage and 100% abstention accuracy in evaluation.",
    stack: ["Python", "FAISS", "MiniLM", "RAG", "LLM"],
    metric: { value: "100%", label: "citation coverage and abstention accuracy" },
    links: [{ label: "View code", url: "https://github.com/Arin-12/Rag-Course-Planner", primary: true }],
  },
];

export const GITHUB_REPOS = "https://github.com/Arin-12?tab=repositories";

export const otherRepos = [
  { name: "Enterprise AI Support Agent", url: "https://github.com/Arin-12/Enterprise-AI-Support-Agent" },
  { name: "QuickCheck AI", url: "https://github.com/Arin-12/QuickCheck-AI" },
  { name: "Book Recommendation System", url: "https://github.com/Arin-12/Book-Recommendation-System" },
  { name: "Emoji Detection using CNN", url: "https://github.com/Arin-12/Emoji-Detection-Using-CNN" },
];

export const skills = [
  { group: "Programming", items: ["Python", "SQL", "Java"] },
  { group: "Machine learning", items: ["Machine learning", "Deep learning", "NLP", "Scikit-learn", "LightGBM"] },
  { group: "Generative AI", items: ["RAG", "Transformers", "LLMs", "AI agents", "Google ADK", "FAISS", "Sentence Transformers"] },
  { group: "Data", items: ["Data science", "Pandas", "NumPy"] },
  { group: "Apps and deployment", items: ["Streamlit", "Flask"] },
  { group: "Cloud and tools", items: ["Azure AI", "Git", "GitHub"] },
];

export const certificates = [
  { group: "Cloud and AI", name: "Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)", by: "Microsoft", when: "2026", url: "https://learn.microsoft.com/en-in/users/arin12-1530/credentials/63f0a21b659e5712" },
  { group: "Cloud and AI", name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", by: "Oracle", when: "2025", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=AFB87F6A6A81F13EC9EA597E7664109DC759EB67BC9209E7AFFE1E474EA0036A" },
  { group: "Cloud and AI", name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", by: "Oracle", when: "2025", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3321F7161BB59E3942A21372A9AADC5629EF943613A91344B75BFF608769EFE4" },
  { group: "Academic (NPTEL)", name: "Introduction to Machine Learning", by: "NPTEL", when: "2026 · 88%, top 5%", url: "https://beta.nptel.ac.in/verify/NOC-4JHT-Y96D-AH1M7" },
  { group: "Academic (NPTEL)", name: "Python for Data Science", by: "NPTEL", when: "80%", url: "" },
];

export const achievements = [
  { value: "7M+", text: "records processed in the accident severity pipeline, with 0.92 F1 and 0.988 AUC" },
  { value: "100%", text: "citation coverage and abstention accuracy for the Agentic RAG Course Planner in evaluation" },
  { value: "Top 5%", text: "in NPTEL Introduction to Machine Learning, with 88%" },
  { value: "18 Mar 2026", text: "conducted a hands-on AI/ML workshop for GDG On Campus MIT-A" },
];

export const building = ["Agentic RAG", "AI agents", "MLOps", "Cloud AI deployment", "Production AI systems"];
