import psycopg2  # type: ignore

from src.internal.model.commercant import Commercant


class Commercant_Repo:
    def add_new_commercant(conn: "psycopg2.connection", commercant: Commercant) -> bool:
        try:
            cur = conn.cursor()
            requete = """ INSERT INTO commercant(id, uid, username, prenom, nom, mail, banniere, mdp, pdp) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)"""

            valeurs = (
                commercant.uid,
                commercant.username,
                commercant.prenom,
                commercant.nom,
                commercant.mail,
                commercant.banniere,
                commercant.mdp,
                commercant.pdp,
            )

            cur.execute(requete, valeurs)
            conn.commit()
            cur.close()

            return True
        except psycopg2.Error as e:
            conn.rollback()
            print(f"Erreur lors de l'insertion : {e}")
            return False

    def delete_commercant_account(conn: "psycopg2.connection", commercant: Commercant):
        try:
            cur = conn.cursor()
            requete = """DELETE * FROM commercant WHERE uid = %s """
            valeurs = commercant.uid

            cur.execute(requete, valeurs)
            conn.commit()
            cur.close()

            return True
        except psycopg2.Error as e:
            conn.rollback()
            print(f"Erreur lors de la deletion : {e}")
            return False

    def update_commercant_account(conn: "psycopg2.connection", commercant: Commercant):
        try:
            cur = conn.cursor()

            champs = {
                "username": commercant.username,
                "prenom": commercant.prenom,
                "nom": commercant.nom,
                "mail": commercant.mail,
                "banniere": commercant.banniere,
                "mdp": commercant.mdp,
                "pdp": commercant.pdp,
            }

            champs_a_maj = {k: v for k, v in champs.items() if v is not None}

            if not champs_a_maj:
                return False

            set_clause = ", ".join(f"{k} = %s" for k in champs_a_maj)
            valeurs = list(champs_a_maj.values()) + [commercant.uid]

            requete = f"UPDATE commercant SET {set_clause} WHERE uid = %s"

            cur.execute(requete, valeurs)
            conn.commit()
            cur.close()

            return True
        except psycopg2.Error as e:
            conn.rollback()
            print(f"Erreur lors de la mise à jour : {e}")
            return False
