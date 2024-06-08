const timelineData = [
  {
    era: "Origins of Life",
    startYear: -3500000000,
    endYear: -3000000000,
    events: [
      {
        year: -3500000000,
        title: "Formation of Simple Molecules",
        description: "The 'primordial soup' theory posits that early Earth's environment facilitated the formation of simple molecules, leading to the RNA world hypothesis."
      },
      {
        year: -3000000000,
        title: "Emergence of Protocells",
        description: "Protocells encapsulating self-replicating RNA and metabolic networks likely originated in hydrothermal vents or tidal pools."
      }
    ]
  },
  {
    era: "Ancient Civilizations",
    startYear: -3000,
    endYear: 500,
    events: [
      {
        year: -3000,
        title: "Mesopotamian Gender Roles",
        description: "Rigid gender roles were enforced through legal systems like the Code of Hammurabi, confining women to limited rights."
      },
      {
        year: -500,
        title: "Greek and Roman Gender Norms",
        description: "In ancient Greece and Rome, gender roles were defined with men in public life and women in domestic roles, although variations existed such as in Sparta."
      }
    ]
  },
  {
    era: "Middle Ages",
    startYear: 500,
    endYear: 1500,
    events: [
      {
        year: 500,
        title: "Feudal System and Church Influence",
        description: "The feudal system and the Church reinforced traditional gender roles, yet figures like Joan of Arc and female saints challenged these norms."
      },
      {
        year: 1100,
        title: "Women in Religious Authority",
        description: "Women like Hildegard of Bingen held significant spiritual authority within convents, challenging the uniformity of patriarchal structures."
      }
    ]
  },
  {
    era: "Renaissance and Enlightenment",
    startYear: 1500,
    endYear: 1800,
    events: [
      {
        year: 1500,
        title: "Rise of Humanism",
        description: "Women scholars like Christine de Pizan advocated for women's education, laying groundwork for future gender equality movements."
      },
      {
        year: 1700,
        title: "Enlightenment and Reason",
        description: "The Enlightenment's emphasis on reason and individual rights contributed to questioning and dismantling traditional gender roles."
      }
    ]
  },
  {
    era: "Industrial Revolution",
    startYear: 1800,
    endYear: 1900,
    events: [
      {
        year: 1800,
        title: "Shifts in Labor and Family Structures",
        description: "Economic changes began to alter family structures and women's roles in labor, setting the stage for future labor movements advocating for gender equality."
      }
    ]
  },
  {
    era: "Modern Day Influences",
    startYear: 1900,
    endYear: 2021,
    events: [
      {
        year: 2020,
        title: "Digital Activism",
        description: "Movements like #MeToo utilized social media to raise awareness about gender-based violence, highlighting the potential of digital activism."
      },
      {
        year: 2021,
        title: "COVID-19 Impact",
        description: "The pandemic exacerbated existing gender inequalities, particularly in the labor market, emphasizing the need for policies addressing these disparities."
      }
    ]
  }
];

let currentEraIndex = 0;
let currentEventIndex = 0;
let zoomLevel = 1;

function updateEvent() {
  const era = timelineData[currentEraIndex];
  const event = era.events[currentEventIndex];

  document.getElementById('era-name').textContent = `${era.era} (${parseYear(era.startYear)} - ${parseYear(era.endYear)})`;
  document.getElementById('event-title').textContent = `${parseYear(event.year)} - ${event.title}`;
  document.getElementById('event-description').textContent = event.description;

  updateProgress();
  updateButtons();
}

function updateProgress() {
  const totalEras = timelineData.length;
  const totalEvents = timelineData.reduce((sum, era) => sum + era.events.length, 0);
  const currentEventPosition = timelineData.slice(0, currentEraIndex).reduce((sum, era) => sum + era.events.length, 0) + currentEventIndex + 1;
  const progress = (currentEventPosition / totalEvents) * 100;

  document.getElementById('progress').style.width = `${progress}%`;
  updateIndicators(totalEvents, currentEventPosition);
}

function updateIndicators(totalEvents, currentEventPosition) {
  const indicatorsContainer = document.getElementById('event-indicators');
  indicatorsContainer.innerHTML = '';

  let eventCount = 0;

  timelineData.forEach(era => {
    era.events.forEach(event => {
      const indicator = document.createElement('div');
      indicator.className = 'event-indicator';
      if (eventCount === currentEventPosition - 1) {
        indicator.classList.add('current-event');
      }
      const label = document.createElement('span');
      label.textContent = parseYear(event.year);
      indicator.appendChild(label);
      indicatorsContainer.appendChild(indicator);
      eventCount++;
    });
  });
}

function updateButtons() {
  document.getElementById('prevBtn').disabled = currentEraIndex === 0 && currentEventIndex === 0;
  document.getElementById('nextBtn').disabled = currentEraIndex === timelineData.length - 1 && currentEventIndex === timelineData[currentEraIndex].events.length - 1;
}

function parseYear(year) {
  const yearInt = parseInt(year, 10);
  if (yearInt < 0) {
    return `${Math.abs(yearInt)} BCE`;
  }
  return `${yearInt} CE`;
}

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentEventIndex > 0) {
    currentEventIndex--;
  } else if (currentEraIndex > 0) {
    currentEraIndex--;
    currentEventIndex = timelineData[currentEraIndex].events.length - 1;
  }
  updateEvent();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentEventIndex < timelineData[currentEraIndex].events.length - 1) {
    currentEventIndex++;
  } else if (currentEraIndex < timelineData.length - 1) {
    currentEraIndex++;
    currentEventIndex = 0;
  }
  updateEvent();
});

document.getElementById('zoom-in').addEventListener('click', () => {
  if (zoomLevel < 4) {
    zoomLevel++;
    adjustZoom();
  }
});

document.getElementById('zoom-out').addEventListener('click', () => {
  if (zoomLevel > 1) {
    zoomLevel--;
    adjustZoom();
  }
});

function adjustZoom() {
  const eventIndicators = document.querySelectorAll('.event-indicator span');
  eventIndicators.forEach(indicator => {
    indicator.style.fontSize = `${12 * zoomLevel}px`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateEvent();
  adjustZoom();
});
