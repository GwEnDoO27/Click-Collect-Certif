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
