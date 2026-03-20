from fastapi import APIRouter, Form, HTTPException
from src.internal.model.commercant import Commercant
from src.internal.repository.commercant_repo import Commercant_Repo
from src.internal.repository.db_config import Db

login = APIRouter()


@login.post("/login")
async def login_commercant(email: str = Form(...), psw: str = Form(...)):
    comm = Commercant(
        uid=None,
        username=None,
        prenom=None,
        nom=None,
        mail=email,
        banniere=None,
        mdp=psw,
        pdp=None,
    )

    if not comm.valid_mail():
        raise HTTPException(status_code=400, detail="Email non valide")

    comm.hash_psw()

    conn = Db.init_conn()
    try:
        result = Commercant_Repo.login_commercant(conn, email, comm.mdp)
    finally:
        conn.close()

    if result is None:
        raise HTTPException(status_code=401, detail="Email ou mot de passe incorrect")

    commercant = Commercant(
        uid=result[0],
        username=result[1],
        prenom=result[2],
        nom=result[3],
        mail=result[4],
        banniere=result[5],
        mdp=None,
        pdp=result[6],
    )

    return commercant.to_dict()
