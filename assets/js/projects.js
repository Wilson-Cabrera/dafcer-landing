// DAFCER Landing Page - Projects Database
// Este archivo contiene únicamente la información descriptiva y técnica de cada obra.
// Es seguro editar estos textos sin riesgo de afectar el motor de animaciones (script.js).

const projectsData = {
    'aurora': {
        title: 'Vivienda uni familiar',
        category: 'Residencial',
        location: 'Plottier, Neuquén',
        surface: '450 m²',
        year: '2024',
        image: 'assets/img/Proyecto_LG1.png',
        description: 'Diseño y construcción de hogar de lujo combinando estética minimalista y tecnología de vanguardia. La obra destaca por sus amplios ventanales y eficiencia energética.',
        hotspots: [
            { x: 25, y: 55, text: 'Carpintería premium en cada ambiente' },
            { x: 50, y: 70, text: 'Porcelanato pulido de alta resistencia' },
            { x: 50, y: 14, text: 'Iluminación inteligente y confort' }
        ]
    },
    'delta': {
        title: 'Padel House Club',
        category: 'Deportivo',
        location: 'Plottier, Neuquén',
        surface: '1,200 m²',
        year: '2025',
        image: 'assets/img/Proyecto_PH.png',
        description: 'Infraestructura deportiva avanzada con canchas full panorámicas; una obra constructiva de alto nivel diseñada para optimizar el rendimiento competitivo y la sustentabilidad.',
        hotspots: [
            { x: 40, y: 15, text: 'Cubierta termoacústica con climatización inteligente.' },
            { x: 40, y: 77, text: 'Césped premium con amortiguación y confort.' },
            { x: 70, y: 45, text: 'Módulos panorámicos de vidrio templado.' }
        ]
    },
    'soho': {
        title: 'Loft Industrial Soho',
        category: 'Renovación',
        location: 'Palermo Soho, BA',
        surface: '180 m²',
        year: '2024',
        image: 'assets/img/project-renovation.png',
        description: 'Transformación integral de un antiguo galpón en una residencia premium. Destaca el diseño industrial con acabados de alta gama y redistribución inteligente de espacios.',
        hotspots: [
            { x: 25, y: 30, text: 'Restauración de bovedillas originales y vigas de hierro' },
            { x: 60, y: 50, text: 'Pared de ladrillo a la vista original con sellado acrílico' },
            { x: 80, y: 65, text: 'Pisos de madera de pinotea recuperada e hidrolaqueada' }
        ]
    }
};
