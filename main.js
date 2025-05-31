const projectLinks = [
    "https://www.jaclinicalresearch.com/",
    "https://www.energymedicalcenters.com/",
    "https://arac22.com/",
    "https://www.paradisusmedresearch.com/",
    "https://www.makyalstudio.com/",
    "https://www.odontologiasoma.com/",
    "https://luzhelena.co/",
    "https://cempu.edu.co/",
    "https://tvgcare.com/",
    "https://palacemetal.com/",
    "https://ceramicasmoderna.co/",
    "https://distrielectricas.com.co/",
    "https://embellecer.com.co/",
    "https://cleanservices.co/",
    "https://lcservices.com.co/",
    "https://hotelversalles.com.co/",
    "https://www.colchonesroyalflex.com.co/",
    "https://www.viaccesorios.com.co/"
];

const container = document.querySelector(".projects .grid");
projectLinks.forEach(link => {
    const card = document.createElement("div");
    card.className = "project-card";
    const title = link.replace(/https?:\/\//, "").replace("www.", "").split(".")[0];
    card.innerHTML = `
        <h3><i class="bi bi-globe-americas"></i> ${title}</h3>
        <a href="${link}" target="_blank">
            <i class="bi bi-link-45deg"></i> Visitar sitio web
        </a>
    `;
    container.appendChild(card);
});
