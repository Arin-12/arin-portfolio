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
    status: "Being modularized in VS Code",
    summary: "A multi-agent research assistant that turns one research topic into a structured research report.",
    problem: "Students and researchers lose time switching between arXiv, Kaggle, UCI, HuggingFace and OpenML to find papers and datasets, check citations, review literature and write up gaps.",
    approach: [
      "Built three collaborating agents with Google ADK: Research, Analysis and Report.",
      "Exposed Python functions as ADK function tools: search_arxiv, search_dataset and validate_citations.",
      "Kept conversation context with the ADK session service.",
      "Added an async retry wrapper with exponential backoff and jitter for 503, 429 and deadline errors.",
    ],
    architecture: ["Research topic", "Research Agent (papers, datasets, citations)", "Analysis Agent (review, gaps, method)", "Report Agent (Markdown report)"],
    result: "Generates an abstract, literature review, research gap, methodology, dataset suggestions, expected results, conclusion and references from a single topic.",
    stack: ["Google ADK", "Gemini", "Python", "arXiv API", "Function tools", "Async retries"],
    metric: { value: "3 agents", label: "research, analysis and report" },
    links: [{ label: "View Kaggle notebook", url: "https://www.kaggle.com/code/arinprashantjain/researchforge-ai", primary: true }],
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
    metric: { value: "2–4 s", label: "per resume, as reported in the README" },
    links: [
      { label: "Open live demo", url: "https://smart-resume-screener-eeee2dun6rtutk7gjn7er5.streamlit.app/", primary: true },
      { label: "View code", url: "https://github.com/Arin-12/smart-resume-screener" },
    ],
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
    id: "support", title: "AI-Powered Customer Support System", period: "In development", kind: "Agentic AI", status: "In development",
    summary: "My major project, currently being built. Details and links will be added when it’s complete.",
    problem: "Customer support needs answers grounded in real data and policy, not guesses.",
    approach: [],
    architecture: [],
    result: "",
    stack: ["AI agents"],
    links: [],
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
