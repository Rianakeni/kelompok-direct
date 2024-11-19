import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DivisionCard = ({ title, description, imageSrc }) => (
  <Card className="mb-6 overflow-hidden">
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <div className="md:w-1/3">
        <img
          src={imageSrc}
          alt={${title} division}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="md:w-2/3">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-bold mb-3">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </div>
    </div>
  </Card>
);

const DivisionsPage = () => {
  const divisions = [
    {
      title: "OFFICER",
      description: "Coordinate Organization activities and organize the detailed flow of programs within the Organization. Manage every program and Officer team to support the achievement of shared goals.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "PARLIAMENTARY",
      description: "Parliamentary function focuses on monitoring health itself, associated with the responsibilities of every functional division while monitoring, evaluating, and maintaining organization members to remain stable in carrying out their respective duties.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "SPIRITUAL",
      description: "Being spiritual becomes the guide to all performances in organization. Besides become a guide, this division also arranges the spiritual programs, which necessarily helps and adds value to the attitudes of our member.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "EDUCATION",
      description: "Education division focuses on developing great competencies in their members. This division organizes activities that can increase intellectual potential and developmental values for members.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "PUBLIC RELATION",
      description: "Public Relations develops internal and external relationships, assists organization members in promotional projects, public events, and builds productive relationships with various stakeholders.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "MULTIMEDIA",
      description: "Multimedia division focuses on creating creative content for the organization's purpose and all related to documentation in every program, social media, and website management.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "SPORT",
      description: "Sport Division develops physical and mental capabilities, encourages team spirit, and supports positive behavior through sports activities.",
      imageSrc: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Our Divisions</h1>
      <div className="space-y-6">
        {divisions.map((division) => (
          <DivisionCard
            key={division.title}
            title={division.title}
            description={division.description}
            imageSrc={division.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default DivisionsPage;