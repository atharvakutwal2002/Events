const DUMMY_EVENTS = [
  {
    id: "1",
    title: "Programming for Everyone",
    description: "Everyone can learn to code! Yes, everyone! Live Event",
    location: "A street 25,  San Francisco",
    date: "2022-06-14",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking Basics",
    description: "Making networking for introverts fun",
    location: "Street 47, New York",
    date: "2022-06-21",
    image: "images/extrovert-event.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking Advanced",
    description: "Making networking for advanced use-cases",
    location: "Street 47, New York",
    date: "2022-07-25",
    image: "images/introvert-event.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
