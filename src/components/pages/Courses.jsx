import React from "react";
import { useParams } from "react-router-dom";
import CourseBanner from "../Courses/CourseBanner";
import CoursePage from "../Courses/CoursePage";
import TopBanner from "../Courses/TopBanner";
import { coursesPage } from "../data/Data";
import SEO from "../../components/SEO";

const Course = () => {
  const { slug } = useParams();

  //  If a slug exists in the URL, show the single course detail
  if (slug) {
    const course = coursesPage.courses.find((c) => c.slug === slug);

    if (!course) {
      return (
        <div className="flex items-center justify-center min-h-[50vh] py-20">
          <h1 className="text-3xl text-gray-500">404 — Course Not Found</h1>
        </div>
      );
    }

    return (
      <>
      <SEO 
      title="Courses" 
      description="This is the Courses for Sciscribe"
    />
      <CoursePage
        pageData={{
          intro: coursesPage.intro,
          courses: [course],
          flexibleLearning: coursesPage.flexibleLearning,
        }}
      />
      </>
    );
  }

  
  return (
    <>
      <TopBanner 
        title="Our Courses"
        subtitle="Explore our wide range of learning opportunities"
      />
      <CourseBanner />
    </>
  );
};

export default Course;
