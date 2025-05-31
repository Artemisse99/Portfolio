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

// Función para convertir a Capital Case
function toTitleCase(str) {
    return str
        .split(/[-_ ]+/) // dividir por guiones, guiones bajos o espacios
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

projectLinks.forEach(link => {
    const card = document.createElement("div");
    card.className = "project-card";

    // Obtener nombre del dominio sin 'www.' ni TLD y convertir a Capital Case
    const rawTitle = link.replace(/https?:\/\//, "").replace("www.", "").split(".")[0];
    const title = toTitleCase(rawTitle);

    card.innerHTML = `
        <h3><i class="bi bi-globe-americas"></i> ${title}</h3>
        <a href="${link}" target="_blank">
            <i class="bi bi-link-45deg"></i> Visitar sitio
        </a>
    `;
    container.appendChild(card);
});
