export interface TeamMember {
  id: number;
  name: string;
  title: string;
  photo: string;
  linkedin?: string;
  instagram?: string;
}

export const team: TeamMember[] = [
  { 
    id: 1, 
    name: 'Çağdaş Çetin', 
    title: 'Founder & Managing Director', 
    photo: '/team/01-cagdas-cetin-1.jpg',
    linkedin: 'https://linkedin.com/in/cagdascetin',
    instagram: 'https://instagram.com/cagdascetin'
  },
  { 
    id: 2, 
    name: 'Okan Kayabaşoğlu', 
    title: 'Founder & Chief Director', 
    photo: '/team/02-okan-kayabasoglu-1.jpeg',
    linkedin: 'https://linkedin.com/in/okankayabasoglu'
  },
  { 
    id: 3, 
    name: 'Gizem Korkmaz', 
    title: 'Senior Event Director', 
    photo: '/team/03-gizem-korkmaz-1.jpg' 
  },
  { 
    id: 4, 
    name: 'Barış Yelbuz', 
    title: 'Coordination Director', 
    photo: '/team/04-baris-yelbuz-1.jpg' 
  },
  { 
    id: 5, 
    name: 'Tutku Aksu', 
    title: 'Event Entertainment Director', 
    photo: '/team/05-tutku-aksu-1.jpg' 
  },
  { 
    id: 6, 
    name: 'Tuğçe Çalışkan', 
    title: 'Creative Director', 
    photo: '/team/06-tugce-caliskan-1.jpeg' 
  },
  { 
    id: 7, 
    name: 'Berkay Pişkin', 
    title: 'Front Sales Director', 
    photo: '/team/07-berkay-piskin-1.jpg' 
  },
  { 
    id: 8, 
    name: 'İdris Barmanbay', 
    title: 'Event Director', 
    photo: '/team/08-idris-barmanbay-1.jpg' 
  },
  { 
    id: 9, 
    name: 'Kansu Albay', 
    title: 'Development Director', 
    photo: '/team/09-kansu-albay-1.jpg' 
  },
  { 
    id: 10, 
    name: 'Oğuz Han Yıldırım', 
    title: 'Event Director', 
    photo: '/team/10-oguz-han-yildirim-1.jpg' 
  },
  { 
    id: 11, 
    name: 'Ümit Sezgi Pişkin', 
    title: 'Event Director', 
    photo: '/team/11-umit-sezgi-piskin-1.jpg' 
  },
  { 
    id: 12, 
    name: 'Mert Kurt', 
    title: 'IT Director', 
    photo: '/team/12-mert-kurt-1.jpg' 
  },
  { 
    id: 13, 
    name: 'Alphan Yuvalı', 
    title: 'CO Director', 
    photo: '/team/13-alphan-yuvali-1.jpg' 
  },
  { 
    id: 14, 
    name: 'Naz Acar', 
    title: 'Event Coordinator', 
    photo: '/team/14-naz-acar-1.jpg' 
  },
  { 
    id: 15, 
    name: 'Duba', 
    title: 'Pet Director 🐕', 
    photo: '/team/15-duba-1.jpg' 
  },
];
