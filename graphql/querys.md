mutation createCategory {
  createCategory(input: {name: "Tecnologia", description: "Cursos de Tecnologia"}) {
    id
    name
    description
  }
}

query queryCategories {
  categories {
    id
    name
    description
  }
}

query queryCategoriesWithCourses {
  categories {
    id
    name
    description
    courses {
      id
      name
    }
  }
}

mutation createCourse {
  createCourse(
    input: {name: "Full Cycle", description: "Pós em Arquitetura", categoryId: "45b375fc-f0b7-4855-a779-02be6124a472"}
  ) {
    id
    name
    description
  }
}

query queryCourses {
  courses {
    id
    name
    description
  }
}

query queryCoursesWithCategory {
  courses {
    id
    name
    description
    category {
      id 
      name
      description
    }
  }
}