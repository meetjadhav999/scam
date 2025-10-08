from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from sentence_transformers import SentenceTransformer
import chromadb
import glob

# Update the path to your PDF files
pdf_files = glob.glob("e:/VCET/SEM4/mini_project/Finance-Bot-via-RAG/pdfs/*.pdf")

loaders = [PyPDFLoader(pdf) for pdf in pdf_files]

Docs = [loader.load() for loader in loaders]

all_pages = [page for doc in Docs for page in doc]

all_documents = all_pages 

text_splitter = RecursiveCharacterTextSplitter(chunk_size=5000, chunk_overlap=0)

chunks = text_splitter.split_documents(all_documents)

text_chunk = [chunk.page_content for chunk in chunks]  

res = SentenceTransformer("all-MiniLM-L6-v2")
embeddings = res.encode(text_chunk)

client = chromadb.PersistentClient(path='db')

collection = client.get_or_create_collection('collection')

ids = [f"doc_{i}" for i in range(len(embeddings))]
