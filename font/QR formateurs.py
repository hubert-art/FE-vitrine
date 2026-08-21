import qrcode

noms_specifiques = [
    "KALONJI BAHIZI",
    "LUPANDU KAPIAMBA",
    "MUGISHO BUZINGA",
    "KAMBERE Daniel",
    "ANDEMA Gaylord",
    "BIGABWA Michel",
    "NZANZU Herve",
    "SHIMWA Joaddan",
    "MULUMEODERWA BAHOLE",
    "NGOY Isaac",
    "GRACE Christian",
    "KINDU KALIHIRA",
    "MUTSIIRWA Josue",
    "NORBERT LUKANDO",
    "ELISHA Chrispin",
    "KILOSHO Jospin",
    "BUINGO Christian",
    "NGOANGE Exauce",
]

for nom in noms_specifiques:
    img = qrcode.make(nom)
    img.save(f"{nom}.png")
    print(f"Code QR pour {nom} créé !")

print("Tous les codes QR ont été générés.")
