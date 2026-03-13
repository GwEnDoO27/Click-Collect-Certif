import logging
import os
from typing import Optional
import psycopg2  # type: ignore
from dotenv import load_dotenv  # type: ignore

load_dotenv()

logger = logging.getLogger(__name__)


class Db:
    @staticmethod
    def init_conn() -> Optional["psycopg2.connection"]:
        try:
            conn = psycopg2.connect(
                database=os.getenv("POSTGRES_DB"),
                user=os.getenv("POSTGRES_USER"),
                host="db",
                password=os.getenv("POSTGRES_PASSWORD"),
                port=5432,
            )
            return conn
        except psycopg2.OperationalError as e:
            logger.error(f"Impossible de se connecter à la base de données : {e}")
            raise

    @staticmethod
    def init_marchand_table(conn: "psycopg2.connection"):
        try:
            cur = conn.cursor()
            cur.execute("""CREATE TABLE IF NOT EXISTS commercant(
                        id SERIAL PRIMARY KEY,
                        uid VARCHAR(255) NOT NULL
                        username VARCHAR(50) NOT NULL,
                        prenom VARCHAR(50) NOT NULL,
                        nom VARCHAR(50) NOT NULL,
                        mail VARCHAR(100) NOT NULL,
                        banniere VARCHAR(200) NOT NULL,
                        mdp VARCHAR(255) NOT NULL,
                        photo_profil VARCHAR(200) NOT NULL);
                        """)
            conn.commit()
            cur.close()
        except psycopg2.Error as e:
            conn.rollback()
            logger.error(f"Erreur lors de la création de la table commercant : {e}")
            raise

    @staticmethod
    def init_table_produit(conn: "psycopg2.connection"):
        try:
            cur = conn.cursor()
            cur.execute("""CREATE TABLE IF NOT EXISTS produit(
                        id SERIAL PRIMARY KEY,
                        nom VARCHAR(50) NOT NULL,
                        description VARCHAR(200) NOT NULL,
                        quantite INTEGER NOT NULL,
                        prix NUMERIC NOT NULL,
                        photo_produit VARCHAR(200) NOT NULL);
                        """)
            conn.commit()
            cur.close()
        except psycopg2.Error as e:
            conn.rollback()
            logger.error(f"Erreur lors de la création de la table produit : {e}")
            raise

    def render(self):
        conn = None
        try:
            conn = self.init_conn()
            self.init_marchand_table(conn)
            self.init_table_produit(conn)
        except Exception as e:
            logger.error(f"Erreur lors de l'initialisation de la base de données : {e}")
            raise
        finally:
            if conn is not None:
                conn.close()
