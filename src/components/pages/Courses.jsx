import React from "react";
import { useParams } from "react-router-dom";
import CourseBanner from "../Courses/CourseBanner";

import CoursePage from "../Courses/CoursePage";

import { coursesPage } from "../data/Data";

const Course = () => {
  const { slug } = useParams();

  if (slug) {
    const course = coursesPage.courses.find((c) => c.slug === slug);

    if (!course) {
      return (
        <div className="flex items-center justify-center py-20">
          <h1 className="text-3xl text-gray-500">404 - Course Not Found</h1>
        </div>
      );
    }

    return (
      <CoursePage
        pageData={{
          intro: coursesPage.intro,
          courses: [course],
          flexibleLearning: coursesPage.flexibleLearning,
        }}
      />
    );
  }

  // Show all courses
  return (
    <CourseBanner />
  );
};

export default Course;
