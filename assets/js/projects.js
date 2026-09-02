// DAFCER Landing Page - Projects Database
// Este archivo contiene únicamente la información descriptiva y técnica de cada obra.
// Es seguro editar estos textos sin riesgo de afectar el motor de animaciones (script.js).

const projectsData = {
    'aurora': {
        title: 'Las Gemas',
        category: 'Residencial',
        location: 'Plottier, Neuquén',
        surface: '175 m²',
        year: '2025',
        description: 'Vivienda de lujo con estética minimalista, donde cada detalle refleja un acabado premium. La obra se distingue por la calidad de sus revestimientos, porcelanatos y una iluminación LED eficiente, que aporta elegancia, confort y funcionalidad a cada espacio.',
        images: [
            {
                src: 'assets/img/Proyecto_LG0.png',
                hotspots: [
                    { x: 65, y: 48, text: 'Abertura de aluminio Moderna 2 + DVH' },
                    { x: 42, y: 60, text: 'Revestimiento plastico texturizado' },
                    { x: 34, y: 27, text: 'Zingueria personalizada' }
                ]
            },
            {
                src: 'assets/img/Proyecto_LG1.png',
                hotspots: [
                    { x: 30, y: 40, text: 'Fachada con revestimiento de alta gama' },
                    { x: 70, y: 60, text: 'Doble altura con ventanales panorámicos' }
                ]
            },
            {
                src: 'assets/img/Proyecto_LG2.png',
                hotspots: [
                    { x: 60, y: 70, text: 'Sanitario Ferrum' },
                    { x: 30, y: 40, text: 'Mampara' }


                ]
            },
            {
                src: 'assets/img/Proyecto_LG3.png',
                hotspots: [
                    { x: 22, y: 45, text: 'Puertas OBLAK Premium' },
                    { x: 70, y: 40, text: 'Terminación interior Full Premium' },
                    { x: 50, y: 80, text: 'Porcelanato Premium Pulido' },
                    { x: 50, y: 16, text: 'Iluminacion LED' }
                ]
            }
        ]
    },
    'delta': {
        title: 'Padel House Club',
        category: 'Deportivo',
        location: 'Plottier, Neuquén',
        surface: '1,200 m²',
        year: '2025',
        description: 'Infraestructura deportiva avanzada con canchas full panorámicas; una obra constructiva de alto nivel diseñada para optimizar el rendimiento competitivo y la sustentabilidad.',
        images: [
            {
                src: 'assets/img/Proyecto_PH.png',
                hotspots: [
                    { x: 40, y: 15, text: 'Cubierta termoacústica con climatización inteligente' },
                    { x: 40, y: 77, text: 'Césped premium con amortiguación y confort' },
                    { x: 70, y: 45, text: 'Módulos panorámicos de vidrio templado' }
                ]
            },
            {
                src: 'assets/img/Proyecto_PH2.png',
                hotspots: [
                    { x: 55, y: 30, text: 'Estructura metálica' },
                    { x: 25, y: 65, text: 'Canchas full panoramicas' },
                    { x: 50, y: 90, text: 'Veredas en alfombra sintética' }
                ]
            },
            {
                src: 'assets/img/Proyecto_PH3.png',
                hotspots: [
                    { x: 60, y: 50, text: 'Iluminación LED profesional para competición.' }
                ]
            },
            {
                src: 'assets/img/Proyecto_PH4.png',
                hotspots: []
            }
        ]
    },
    'soho': {
        title: 'Spusa',
        category: 'Remodelación',
        location: 'Capital, Neuquén',
        surface: '500 m²',
        year: '2025',
        description: 'Proyecto de transformación integral de espacios corporativos, orientado a crear ambientes funcionales y sofisticados. Se destaca por un diseño corporativo moderno, con una estética contemporánea que combina identidad, confort y profesionalismo.',
        images: [
            {
                src: 'assets/img/Proyecto-Spusa0.png',
                hotspots: [
                    { x: 25, y: 30, text: 'cielo raso suspendido' },
                    { x: 50, y: 50, text: 'Puertas Premium' },
                    { x: 70, y: 55, text: 'Terminaciones en pared WPS' }
                ]
            },
            {
                src: 'assets/img/Proyecto-Spusa1.png',
                hotspots: [
                    { x: 50, y: 85, text: 'Piso flotante' }
                ]
            },
            {
                src: 'assets/img/Proyecto-Spusa2.png',
                hotspots: [
                    { x: 25, y: 20, text: 'cielo raso desmontable' },
                    { x: 40, y: 35, text: 'Acabado Premium de paredes' },
                    { x: 60, y: 70, text: 'Piso flotante' }
                ]
            },
            {
                src: 'assets/img/Proyecto-Spusa2.png',
                hotspots: []
            }
        ]
    },
    'castanos': {
        title: 'Los Castaños',
        category: 'Residencial',
        location: 'Neuquén',
        surface: '--- m²',
        year: '2025',
        description: 'Proyecto residencial de alta gama en una ubicación privilegiada. Diseño contemporáneo que combina amplitud, confort y calidad constructiva en cada detalle, con terminaciones premium y espacios pensados para el bienestar.',
        images: [
            {
                src: 'assets/img/Proyecto_LC0.png',
                hotspots: [
                    { x: 35, y: 40, text: 'Revestimiento premium poliuretánico' },
                    { x: 32, y: 70, text: 'Iluminación exterior de emisión bidireccional' },
                    { x: 56, y: 60, text: 'Puerta de seguridad premium multianclaje' }
                ]
            },
            {
                src: 'assets/img/Proyecto_LC1.png',
                hotspots: [
                    { x: 56, y: 50, text: 'Amoblamiento personalizado a medida' }
                ]
            },
            {
                src: 'assets/img/Proyecto_LC2.png',
                hotspots: [
                    { x: 56, y: 50, text: 'Bacha inteligente Smart' },
                    { x: 50, y: 80, text: 'Mesada en Silestone Calacatta' }
                ]
            },
            {
                src: 'assets/img/Proyecto_LC3.png',
                hotspots: [
                    { x: 72, y: 30, text: 'Ducha escocesa de hidromasaje' },
                    { x: 50, y: 80, text: 'Sanitario Ferrum' }
                ]
            }
        ]
    }
};
