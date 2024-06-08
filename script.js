const timelineData = [
  {
    period: "Origins of Life",
    events: [
      {
        year: "-3.5 Billion",
        title: "Formation of Simple Molecules",
        description: "The 'primordial soup' theory posits that early Earth's environment facilitated the formation of simple molecules, leading to the RNA world hypothesis."
      },
      {
        year: "-3.0 Billion",
        title: "Emergence of Protocells",
        description: "Protocells encapsulating self-replicating RNA and metabolic networks likely originated in hydrothermal vents or tidal pools."
      }
    ]
  },
  {
    period: "Ancient Civilizations",
    events: [
      {
        year: "-3000",
        title: "Mesopotamian Gender Roles",
        description: "Rigid gender roles were enforced through legal systems like the Code of Hammurabi, confining women to limited rights."
      },
      {
        year: "-500",
        title: "Greek and Roman Gender Norms",
        description: "In ancient Greece and Rome, gender roles were defined with men in public life and women in domestic roles, although variations existed such as in Sparta."
      }
    ]
  },
  {
    period: "Middle Ages",
    events: [
      {
        year: "500",
        title: "Feudal System and Church Influence",
        description: "The feudal system and the Church reinforced traditional gender roles, yet figures like Joan of Arc and female saints challenged these norms."
      },
      {
        year: "1100",
        title: "Women in Religious Authority",
        description: "Women like Hildegard of Bingen held significant spiritual authority within convents, challenging the uniformity of patriarchal structures."
      }
    ]
  },
  {
    period: "Renaissance and Enlightenment",
    events: [
      {
        year: "1500",
        title: "Rise of Humanism",
        description: "Women scholars like Christine de Pizan advocated for women's education, laying groundwork for future gender equality movements."
      },
      {
        year: "1700",
        title: "Enlightenment and Reason",
        description: "The Enlightenment's emphasis on reason and individual rights contributed to questioning and dismantling traditional gender roles."
      }
    ]
  },
  {
    period: "Industrial Revolution",
    events: [
      {
        year: "1800",
        title: "Shifts in Labor and Family Structures",
        description: "Economic changes began to alter family structures and women's roles in labor, setting the stage for future labor movements advocating for gender equality."
      }
    ]
  },
  {
    period: "Modern Day Influences",
    events: [
      {
        year: "2020",
        title: "Digital Activism",
        description: "Movements like #MeToo utilized social media to raise awareness about gender-based violence, highlighting the potential of digital activism."
      },
      {
        year: "2021",
        title: "COVID-19 Impact",
        description: "The pandemic exacerbated existing gender inequalities, particularly in the labor market, emphasizing the need for policies addressing these disparities."
      }
    ]
  }
];

function createTimeline() {
  const timelineContent = document.getElementById('timeline-content');
  
  timelineData.forEach(period => {
    const periodDiv = document.createElement('div');
    periodDiv.className = 'period';

    const periodTitle = document.createElement('h2');
    periodTitle.textContent = period.period;
    periodDiv.appendChild(periodTitle);

    period.events.forEach(event => {
      const eventDiv = document.createElement('div');
      eventDiv.className = 'event';

      const eventTitle = document.createElement('h3');
      eventTitle.textContent = `${event.year} - ${event.title}`;
      eventDiv.appendChild(eventTitle);

      const eventDescription = document.createElement('p');
      eventDescription.textContent = event.description;
      eventDiv.appendChild(eventDescription);

      periodDiv.appendChild(eventDiv);
    });

    timelineContent.appendChild(periodDiv);
  });
}

document.addEventListener('DOMContentLoaded', createTimeline);
