import React from "react";

//Bosses
import * as bosses from "./images";

const Bosses = () => {
  const bossList = [
    {
      name: "Nirma",
      image: bosses.nirma,
      drops: [
        {
          name: "Aridu's Gnarled Voidstaff",
          image: bosses.aridusDrop1,
          stats: bosses.aridusDrop1Stats,
        },
        {
          name: "Aridu's Gnarled Voidstaff",
          image: bosses.aridusDrop2,
          stats: bosses.aridusDrop2Stats,
        },
        {
          name: "Aridu's Gnarled Voidstaff",
          image: bosses.aridusDrop3,
          stats: bosses.aridusDrop3Stats,
        },
        {
          name: "Aridu's Gnarled Voidstaff",
          image: bosses.aridusDrop4,
          stats: bosses.aridusDrop4Stats,
        },
      ],
    },
    {
      name: "Aridus",
      image: bosses.aridus,
      drops: [],
    },
    {
      name: "Grand Aelon",
      image: bosses.grandAelon,
      drops: [],
    },
    {
      name: "Junobote",
      image: bosses.junobote,
      drops: [],
    },
    {
      name: "Adentus",
      image: bosses.adentus,
      drops: [],
    },
    {
      name: "Kowazan",
      image: bosses.kowazan,
      drops: [],
    },
    {
      name: "Minezerok",
      image: bosses.minezerok,
      drops: [],
    },
    {
      name: "Azhreil",
      image: bosses.azhreil,
      drops: [],
    },
    {
      name: "Cornelius",
      image: bosses.cornelius,
      drops: [],
    },
    {
      name: "Malakar",
      image: bosses.malakar,
      drops: [],
    },
    {
      name: "Talus",
      image: bosses.talus,
      drops: [],
    },
    {
      name: "Chernobog",
      image: bosses.chernobog,
      drops: [],
    },
    {
      name: "Excavator-9",
      image: bosses.excavator9,
      drops: [],
    },
    {
      name: "Morokai",
      image: bosses.morokai,
      drops: [],
    },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="content">
        <div className="row">
          <div className="col-md-8 col-lg-6">
            <div className="mb-5">
              <div className="mb-4">
                <small className="fw-lighter text-uppercase">
                  Votación semanal
                </small>
                <h1 className="display-3 fw-bold text-primary mb-3">
                  Guild Bosses
                </h1>
              </div>
              <p className="lead mb-0">
                Vota por el boss que te gustaría hacer con la guild.
              </p>
              <p className="fw-lighter">
                Los tres mas votados son los que se haran Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Modi, maxime, reiciendis
                reprehenderit quod non amet ipsa minima aut facilis laboriosam,
                rerum impedit ea dignissimos doloribus id laborum alias culpa
                veniam!
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {bossList.map((boss, index) => {
            return (
              <div key={index} className="col col-md-6 col-lg-3 col-xl-2 mb-4">
                <div className="boss">
                  <div className="boss-info">
                    <h3 className="boss-name">{boss.name}</h3>
                    <div className="boss-drops">
                      {boss.drops.map((drop, index) => {
                        return (
                          <img 
                            key={index}
                            src={drop.image}
                            alt={drop.name}
                            data-bs-toggle="tooltip"
                            data-custom-tooltip
                            data-bs-placement="top"
                            data-bs-html="true"  
                            title={`<img src=${drop.stats} alt="${boss.name}-${drop.name}">`}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <img className="boss-img" src={boss.image} alt="nirma" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bosses;
