import re


class Commercant:
    def __init__(
        self,
        uid: str,
        username: str | None,
        prenom: str | None,
        nom: str | None,
        mail: str | None,
        banniere: str | None,
        mdp: str | None,
        pdp: str | None,
    ):
        self.uid = uid
        self.username = username
        self.prenom = prenom
        self.nom = nom
        self.mail = mail
        self.banniere = banniere
        self.mdp = mdp
        self.pdp = pdp

    def valid_mail(self):
        """Vérifie si le format de l'email est correct avant toute action."""
        if not self.mail:
            return False
        # Petite regex basique pour l'exemple
        pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
        return re.match(pattern, self.mail) is not None

    def to_dict(self) -> dict:
        """
        Transforme l'objet en dictionnaire pour le renvoyer en JSON via ton API.
        """
        return {
            "uid": self.uid,
            "username": self.username,
            "prenom": self.prenom,
            "nom": self.nom,
            "mail": self.mail,
            "banniere": self.banniere,
            "photo_profil": self.pdp,
        }

    def hash_psw(self):
        self.mdp = hash(self.mdp)
