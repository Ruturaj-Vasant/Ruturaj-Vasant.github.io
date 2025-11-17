export type NotebookItem = {
  title: string;
  path: string; // path within repo, e.g. "notebooks/intro.ipynb"
  summary?: string;
  tags?: string[];
  category?: 'Projects' | 'Exploratory' | 'Practice';
};

const USER = 'Ruturaj-Vasant';
const REPO = 'Understanding_Data_Science_and_AI';
const BRANCH = 'main';

function repoUrl(path: string) {
  return `https://github.com/${USER}/${REPO}/blob/${BRANCH}/${path}`;
}

function nbviewerUrl(path: string) {
  return `https://nbviewer.org/github/${USER}/${REPO}/blob/${BRANCH}/${path}`;
}

function colabUrl(path: string) {
  return `https://colab.research.google.com/github/${USER}/${REPO}/blob/${BRANCH}/${path}`;
}

export function toLinks(item: NotebookItem) {
  return {
    repo: repoUrl(item.path),
    nbviewer: nbviewerUrl(item.path),
    colab: colabUrl(item.path),
  };
}

// Add your notebooks here. Example entries shown below.
export const dsNotebooks: NotebookItem[] = [
  // Projects
  {
    title: 'Telco Churn Prediction',
    path: 'projects/Telco_Churn_Prediction.ipynb',
    category: 'Projects',
    summary: 'Tuned Decision Tree and L1‑Logistic to maximize AUC; applied cost‑aware targeting.',
  },
  {
    title: 'Patient No-Show Prediction',
    path: 'projects/Patient_NoShow_Prediction.ipynb',
    category: 'Projects',
    summary: 'Engineered features and evaluated classifiers to predict no‑shows for staffing planning.',
  },
  // Exploratory
  {
    title: 'Bilateral Trade EDA',
    path: 'exploratory/Bilateral_Trade_EDA.ipynb',
    category: 'Exploratory',
    summary: 'Explored trade with pandas/plotly; identified trends, outliers, and country patterns.',
  },
  // Practice
  // Removed intro-level notebooks per request
  { title: 'T4: Decision Trees', path: 'practice/T4_Decision_Trees.ipynb', category: 'Practice', summary: 'Decision tree fundamentals and scikit‑learn classification.' },
  { title: 'T4: Fitting Data Science Models', path: 'practice/T4_Fitting_Data_Science_Models.ipynb', category: 'Practice', summary: 'Preprocess → split → fit → evaluate modeling workflow.' },
  { title: 'T5: Model Assessment', path: 'practice/T5_Model_Assessment.ipynb', category: 'Practice', summary: 'Metrics and validation strategies; bias–variance trade‑off.' },
  { title: 'T5: Model Complexity & Cross-Validation', path: 'practice/T5_Model_Complexity_Cross_Validation.ipynb', category: 'Practice', summary: 'Hyperparameter tuning and complexity control via cross‑validation.' },
  { title: 'T6: Regression & Regularization (Ames)', path: 'practice/T6_Regression_Regularization_Ames.ipynb', category: 'Practice', summary: 'Ridge/Lasso on housing data; regularization and scaling effects.' },
  { title: 'T7: Basic Neural Networks', path: 'practice/T7_Basic_Neural_Networks.ipynb', category: 'Practice', summary: 'Intro feedforward networks; training and evaluation for classification.' },
  { title: 'T9: Text Mining', path: 'practice/T9_Text_Mining.ipynb', category: 'Practice', summary: 'Text preprocessing and vectorization (TF‑IDF) with simple classifiers.' },
];
