// DAFCER Landing Page - Projects Database
// Este archivo contiene únicamente la información descriptiva y técnica de cada obra.
// Es seguro editar estos textos sin riesgo de afectar el motor de animaciones (script.js).

const projectsData = {
    'aurora': {
        title: 'Residencia Aurora',
        category: 'Residencial',
        location: 'Nordelta, BA',
        surface: '450 m²',
        year: '2024',
        image: 'assets/img/project-residential.png',
        description: 'Diseño y construcción de hogar de lujo combinando estética minimalista y tecnología de vanguardia. La obra destaca por sus amplios ventanales y eficiencia energética.',
        hotspots: [
            { x: 20, y: 55, text: 'Luminarias LED integradas y automatización Lutron' },
            { x: 38, y: 70, text: 'Microcemento alisado con acabado mate premium' },
            { x: 45, y: 40, text: 'Carpintería de aluminio anodizado con DVH' }
        ]
    },
    'delta': {
        title: 'Torre Corporativa Delta',
        category: 'Comercial',
        location: 'Puerto Madero, BA',
        surface: '12,000 m²',
        year: '2023',
        image: 'assets/img/project-commercial.png',
        description: 'Infraestructura comercial avanzada con certificación LEED. Una obra de ingeniería de alto nivel diseñada para optimizar el rendimiento corporativo y la sustentabilidad.',
        hotspots: [
            { x: 30, y: 35, text: 'Fachada con doble vidrio templado y control de radiación' },
            { x: 50, y: 65, text: 'Fundación sismo-resistente de hormigón armado' },
            { x: 75, y: 45, text: 'Climatización inteligente VRV de bajo consumo' }
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
