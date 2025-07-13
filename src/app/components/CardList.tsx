"use client";
import { useState } from "react";
import { CardData, TCardName } from "../constant/CardData";
import { UserCard } from "../components/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { statusColors } from "../utils/statusColors";
import { status as Status } from "../types/TCardData";
export default function CardList({ setSelectedName }: TCardName) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleCard = (id: number, name: string) => {
    setExpandedId(expandedId === id ? null : id);
    setSelectedName(name);
  };
  return (
    <div className="relative min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 ">
        {CardData.map((card) => {
          const {
            id,
            imageUrl,
            name,
            age,
            gender,
            status,
            icons,
            tags,
            summary,
            details,
            rating,
            sessions,
            helped,
            returnRate,
            languages,
            available,
          } = card;
          const {
            iconPhone,
            iconBell,
            iconClock,
            iconStar,
            iconSessions,
            iconHeart,
            iconUser,
            iconCalender,
            iconArrowUp,
            iconArrowDown,
          } = icons;
          const isExpanded = expandedId === id;
          return (
            <div
              key={id}
              onClick={() => toggleCard(id, name)}
              className={`bg-white rounded-lg shadow-md cursor-pointer border-none p-4 transition-all duration-300 ease-in-out transform ${
                isExpanded ? "lg:col-span-2 lg:scale-105 shadow-xl" : ""
              }`}
            >
              <div className="relative rounded-full">
                {(iconPhone || iconBell) && (
                  <FontAwesomeIcon
                    icon={(iconPhone || iconBell) as IconProp}
                    className="bg-fuchsia-500 text-white rounded-full text-xl p-1 sm:p-2 absolute top-2 right-0"
                  />
                )}
              </div>
              <div className="flex flex-col items-center sm:flex-row sm:items-start flex-nowrap gap-1">
                <div className="relative w-20 flex-shrink-0">
                  <img
                    src={imageUrl}
                    alt={`${name} profile`}
                    className="rounded-full w-16 sm:w-20 h-20 object-cover"
                  />
                  {status && (
                    <span
                      className={`absolute top-15 right-0 h-5 w-5 rounded-full border-2 border-white ${
                        statusColors[status] || "bg-green-500"
                      }`}
                    ></span>
                  )}
                </div>
                <div className="mt-3">
                  <h3 className="text-2xl font-bold mb-2">
                    {name}, {age}
                    <span className="bg-gray-200 text-fuchsia-600 rounded-md px-2 py-2 mx-3 text-sm">
                      {gender}
                    </span>
                  </h3>
                  {status && (
                    <div
                      className={`font-small text-[15px] ${
                        status === Status.AvailableNow
                          ? "text-green-600"
                          : "text-gray-500"
                      }`}
                    >
                      <div className="flex items-center space-x-1">
                        <FontAwesomeIcon icon={iconClock} />
                        <span>{status}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3 mt-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-700 rounded-full px-2 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 line-clamp-2 text-xl text-start leading-7">
                {summary}
              </p>

              {isExpanded && (
                <div className="mt-4 animate-fadeIn">
                  <p className="text-gray-600 mb-2 text-xl text-start">
                    {details}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-4">
                    <UserCard label="Rating" value={rating} icon={iconStar} />
                    <UserCard
                      label="Sessions"
                      value={sessions}
                      icon={iconSessions}
                    />
                    <UserCard label="Helped" value={helped} icon={iconHeart} />
                    <UserCard
                      label="Return Rate"
                      value={returnRate}
                      icon={iconUser}
                    />
                    <div className="col-span-full">
                      <div className="text-2xl flex space-x-2 mb-2">
                        <FontAwesomeIcon
                          icon={iconCalender}
                          className="text-xl mt-1"
                        />
                        <span>Available</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs min-w-full text-start">
                        {available.map((available) => (
                          <div
                            key={available}
                            className="text-black bg-gray-100 rounded-md px-3 py-2 "
                          >
                            {available}
                          </div>
                        ))}
                      </div>
                      <div className="text-2xl mt-5 text-start">Languages</div>
                      <div className="flex flex-nowrap gap-2 text-xs mt-3">
                        {languages.map((lang) => (
                          <div
                            key={lang}
                            className="bg-gray-100 text-black rounded-md py-1 px-3 text-sm text-start"
                          >
                            {lang}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-4 flex justify-end">
                <FontAwesomeIcon
                  icon={isExpanded ? iconArrowDown : iconArrowUp}
                  className="text-gray-400 text-xl"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
