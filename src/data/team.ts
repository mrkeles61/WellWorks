export interface TeamMember {
  id: number;
  name: string;
  title: string;
  photo: string;
  linkedin?: string;
  instagram?: string;
}

export const team: TeamMember[] = [
  { id: 1, name: 'Çağdaş Çetin', title: 'Founder & Managing Director', photo: '/placeholder.svg' },
  { id: 2, name: 'Okan Kayabaşoğlu', title: 'Founder & Chief Director', photo: '/placeholder.svg' },
  { id: 3, name: 'Gizem Korkmaz', title: 'Senior Event Director', photo: '/placeholder.svg' },
  { id: 4, name: 'Barış Yelbuz', title: 'Coordination Director', photo: '/placeholder.svg' },
  { id: 5, name: 'Tutku Aksu', title: 'Event Entertainment Director', photo: '/placeholder.svg' },
  { id: 6, name: 'Tuğçe Çalışkan', title: 'Creative Director', photo: '/placeholder.svg' },
  { id: 7, name: 'Berkay Pişkin', title: 'Front Sales Director', photo: '/placeholder.svg' },
  { id: 8, name: 'İdris Barmanbay', title: 'Event Director', photo: '/placeholder.svg' },
  { id: 9, name: 'Kansu Albay', title: 'Development Director', photo: '/placeholder.svg' },
  { id: 10, name: 'Oğuz Han Yıldırım', title: 'Event Director', photo: '/placeholder.svg' },
  { id: 11, name: 'Ümit Sezgi Pişkin', title: 'Event Director', photo: '/placeholder.svg' },
  { id: 12, name: 'Mert Kurt', title: 'IT Director', photo: '/placeholder.svg' },
  { id: 13, name: 'Alphan Yuvalı', title: 'CO Director', photo: '/placeholder.svg' },
  { id: 14, name: 'Naz Acar', title: 'Event Coordinator', photo: '/placeholder.svg' },
  { id: 15, name: 'Duba', title: 'Pet Director 🐕', photo: '/placeholder.svg' },
];
