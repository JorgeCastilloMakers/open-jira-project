interface SeedData{
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;  
}


export const seedData: SeedData = {
    entries: [{
        description: 'Pendiente: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas est quis ipsum luctus auctor.',
        status: 'pending',
        createdAt: Date.now() - 1000000,
    },
    {
        description: 'En progreso: Sed scelerisque arcu vitae risus aliquet, at convallis ex malesuada. Nullam aliquam elit sapien, vitae finibus nisi semper ut.',
        status: 'in-progress',
        createdAt: Date.now(),
    },
    {
        description: 'Finalizada: Phasellus a lobortis ligula, non scelerisque justo. Suspendisse ut risus nec dolor ultricies iaculis vitae et nisi. ',
        status: 'finished',
        createdAt: Date.now() - 100000,
    },

    ]
}