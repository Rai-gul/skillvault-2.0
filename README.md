---------------------------------------------------------------------------------------------------------------------------
# SkillVault 2.0

A modern, full-stack encrypted note-taking application built with Django (REST API, Fernet encryption) and React (Vite, Axios).  
Showcases secure data handling, glassmorphic UI, and a production-style development workflow.

---

## 🚀 Features

- **Secure notes**: AES-256 encryption at rest using Python’s `cryptography.fernet`  
- **REST API**: Django REST Framework powering CRUD endpoints  
- **Modern Frontend**: React + Vite with advanced glassmorphic styling and responsive design  
- **Glassmorphism & Animations**: CSS custom properties, animated gradients, and micro-interactions  
- **Full-Stack Dev Workflow**:  
  - Environment-based secrets (`.env`)  
  - Proxy setup (Vite → Django)  
  - Token-based auth (can be toggled)  
  - Unit tests (pytest + React Testing Library)

---

## 🛠️ Tech Stack

- **Backend**: Python 3.12, Django 5.2, Django REST Framework, `cryptography` (Fernet), SQLite  
- **Frontend**: React 18, Vite 7, Axios, CSS Variables & Flexbox/Grid  
- **Dev Tools**: WSL/Ubuntu, Virtualenv, Node.js / npm, Git/GitHub  

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone git@github.com:Rai-gul/skillvault-2.0.git
cd skillvault-2.0

---

###Backend Setup

# Enter backend folder
cd backend

# Create & activate virtualenv
python3 -m venv .venv
source .venv/bin/activate

# Install Python deps
pip install -r requirements.txt

# Create .env (copy .env.example or manually)
cp .env.example .env
# Edit .env to set DJANGO_SECRET_KEY and FERNET_KEY

# Apply migrations
python manage.py migrate

# (Optional) Create superuser for token auth or admin
python manage.py createsuperuser

# Run dev server
python manage.py runserver 0.0.0.0:8000

---

###Frontend Setup

# In a new shell, from project root:
cd frontend

# Install Node deps
npm install

# Start Vite dev server (with host so Windows/WLS can see it)
npm run dev -- --host

---

###🔧 Configuration

DJANGO_SECRET_KEY=changeme_to_a_secure_value
FERNET_KEY=<generate with `python -c "from cryptography.fernet import Fernet; print(Fernet.generate_key().decode())"`>

---

###Usage

View notes: your saved entries will decrypt on load.

Add a note: type in the textarea and click Save Note.

Optional: toggle in/out of token-auth by editing settings.py’s REST_FRAMEWORK block.

---

##🗂️ Project Structure

skillvault-2.0/
├── backend/
│   ├── .env.example
│   ├── requirements.txt
│   ├── manage.py
│   └── skillvault_backend/
│       ├── settings.py
│       ├── urls.py
│       └── ...
│   └── notes/
│       ├── models.py
│       ├── serializers.py
│       └── views.py
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── AuthContext.jsx
        ├── index.css
        └── components/
            ├── LoginForm.jsx
            ├── NoteForm.jsx
            └── NoteList.jsx

---

##📝 License
This project is licensed under the MIT License. See the LICENSE file for details.
---------------------------------------------------------------------------------------------------------------------------
