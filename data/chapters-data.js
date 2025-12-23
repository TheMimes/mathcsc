// data/chapters-data.js
// Définir la variable dans l'espace global window pour éviter les conflits
window.programData = [
    {
        id: 1,
        title: "Sets",
        description: "Definition, relations and operations between sets",
        category: "algebra",
        filename: "chapter1.html",
        sections: [
            { number: "1.1", title: "Definition of sets", page: 1, summary: "Summary page 2", exercises: "Exercises 1.1 page 3" },
            { number: "1.2", title: "Relations between sets", page: 4, summary: "Summary page 5", exercises: "Exercises 1.2 page 6" },
            { number: "1.3", title: "Operations between sets", page: 7, summary: "Summary page 9", exercises: "Exercises 1.3 page 9" },
            { number: "Self-test", title: "Self-assessment test 1", page: 10, summary: "", exercises: "" }
        ]
    },
    {
        id: 2,
        title: "Inequalities",
        description: "Properties and solving inequalities",
        category: "algebra",
        filename: "chapter2.html",
        sections: [
            { number: "2.1", title: "Properties of inequalities", page: 12, summary: "Summary page 14", exercises: "Exercises 2.1 page 14" },
            { number: "2.2", title: "Solving quadratic inequalities", page: 16, summary: "Summary page 19", exercises: "Exercises 2.2 page 20" },
            { number: "2.3", title: "Solving rational inequalities", page: 20, summary: "Summary page 22", exercises: "Exercises 2.3 page 22" },
            { number: "Self-test", title: "Self-assessment test 2", page: 23, summary: "", exercises: "" }
        ]
    },
    {
        id: 3,
        title: "Functions",
        description: "Fundamental concepts of functions and their properties",
        category: "algebra",
        filename: "chapter3.html",
        sections: [
            { number: "3.1", title: "Cartesian coordinate system", page: 25, summary: "Summary page 28", exercises: "Exercises 3.1 page 28" },
            { number: "3.2", title: "Function concept", page: 30, summary: "Summary page 32", exercises: "Exercises 3.2 page 32" },
            { number: "3.3", title: "Monotonicity of functions", page: 34, summary: "Summary page 36", exercises: "Exercises 3.3 page 37" },
            { number: "3.4", title: "Parity of functions", page: 38, summary: "Summary page 40", exercises: "Exercises 3.4 page 40" },
            { number: "3.5", title: "Inverse function", page: 42, summary: "Summary page 43", exercises: "Exercises 3.5 page 43" },
            { number: "3.6", title: "Power function", page: 43, summary: "Summary page 46", exercises: "Exercises 3.6 page 46" },
            { number: "3.7", title: "Exponential function", page: 47, summary: "Summary page 49", exercises: "Exercises 3.7 page 49" },
            { number: "3.8", title: "Logarithm and logarithmic function", page: 50, summary: "Summary page 54", exercises: "Exercises 3.8 page 55" },
            { number: "Self-test", title: "Self-assessment test 3", page: 56, summary: "", exercises: "" }
        ]
    },
    {
        id: 4,
        title: "Trigonometry",
        description: "Trigonometric functions and their properties",
        category: "algebra",
        filename: "chapter4.html",
        sections: [
            { number: "4.1", title: "Angle definition and radians", page: 59, summary: "Summary page 62", exercises: "Exercises 4.1 page 63" },
            { number: "4.2", title: "Definition of trigonometric functions", page: 65, summary: "Summary page 70", exercises: "Exercises 4.2 page 71" },
            { number: "4.3", title: "Reduction formulas in trigonometry", page: 72, summary: "Summary page 75", exercises: "Exercises 4.3 page 76" },
            { number: "4.4", title: "Graphs of sine and cosine functions", page: 78, summary: "Summary page 83", exercises: "Exercises 4.4 page 83" },
            { number: "4.5", title: "Graphs of tangent and cotangent functions", page: 85, summary: "Summary page 89", exercises: "Exercises 4.5 page 90" },
            { number: "Self-test", title: "Self-assessment test 4", page: 91, summary: "", exercises: "" }
        ]
    },
    {
        id: 5,
        title: "Inverse Trigonometric Functions",
        description: "Arc sine, arc cosine, arc tangent and arc cotangent functions",
        category: "algebra",
        filename: "chapter5.html",
        sections: [
            { number: "5.1", title: "Arc sine and arc cosine functions", page: 94, summary: "Summary page 97", exercises: "Exercises 5.1 page 97" },
            { number: "5.2", title: "Arc tangent and arc cotangent functions", page: 98, summary: "Summary page 100", exercises: "Exercises 5.2 page 101" },
            { number: "Self-test", title: "Self-assessment test 5", page: 102, summary: "", exercises: "" }
        ]
    },
    {
        id: 6,
        title: "Trigonometry of Sum and Difference of Angles",
        description: "Trigonometric formulas for sum and difference of angles",
        category: "algebra",
        filename: "chapter6.html",
        sections: [
            { number: "6.1", title: "Sine, cosine and tangent formulas", page: 104, summary: "Summary page 107", exercises: "Exercises 6.1 page 109" },
            { number: "6.2", title: "Formulas for trigonometric functions", page: 110, summary: "Summary page 111", exercises: "Exercises 6.2 page 112" },
            { number: "6.3", title: "Formulas in the plane", page: 113, summary: "Summary page 117", exercises: "Exercises 6.3 page 117" },
            { number: "6.4", title: "Product-to-sum and sum-to-product transformations", page: 118, summary: "Summary page 121", exercises: "Exercises 6.4 page 121" },
            { number: "Self-test", title: "Self-assessment test 6", page: 122, summary: "", exercises: "" }
        ]
    },
    {
        id: 7,
        title: "Sequences",
        description: "Arithmetic and geometric sequences and their properties",
        category: "algebra",
        filename: "chapter7.html",
        sections: [
            { number: "7.1", title: "Sequence concept and related formulas", page: 125, summary: "Summary page 127", exercises: "Exercises 7.1 page 127" },
            { number: "7.2", title: "Arithmetic sequences", page: 128, summary: "Summary page 133", exercises: "Exercises 7.2 page 134" },
            { number: "7.3", title: "Geometric sequences", page: 136, summary: "Summary page 141", exercises: "Exercises 7.3 page 142" },
            { number: "Self-test", title: "Self-assessment test 7", page: 143, summary: "", exercises: "" }
        ]
    },
    {
        id: 8,
        title: "Complex Numbers",
        description: "Definition and operations on complex numbers",
        category: "algebra",
        filename: "chapter8.html",
        sections: [
            { number: "8.1", title: "Definition of complex numbers", page: 146, summary: "Summary page 148", exercises: "Exercises 8.1 page 149" },
            { number: "8.2", title: "Arithmetic operations", page: 150, summary: "Summary page 153", exercises: "Exercises 8.2 page 154" },
            { number: "Self-test", title: "Self-assessment test 8", page: 154, summary: "", exercises: "" }
        ]
    },
    {
        id: 9,
        title: "Lines in the Plane",
        description: "Equations and properties of lines in the plane",
        category: "geometry",
        filename: "chapter9.html",
        sections: [
            { number: "9.1", title: "Inclination angle and slope", page: 157, summary: "Summary page 158", exercises: "Exercises 9.1 page 159" },
            { number: "9.2", title: "Equation of a line", page: 160, summary: "Summary page 164", exercises: "Exercises 9.2 page 165" },
            { number: "9.3", title: "Parallel and perpendicular lines", page: 167, summary: "Summary page 171", exercises: "Exercises 9.3 page 172" },
            { number: "9.4", title: "Intersection of lines", page: 174, summary: "Summary page 176", exercises: "Exercises 9.4 page 176" },
            { number: "Self-test", title: "Self-assessment test 9", page: 178, summary: "", exercises: "" }
        ]
    },
    {
        id: 10,
        title: "Conic Sections",
        description: "Circle, ellipse, hyperbola and parabola",
        category: "geometry",
        filename: "chapter10.html",
        sections: [
            { number: "10.1", title: "Circle", page: 181, summary: "Summary page 183", exercises: "Exercises 10.1 page 183" },
            { number: "10.2", title: "Ellipse", page: 185, summary: "Summary page 188", exercises: "Exercises 10.2 page 188" },
            { number: "10.3", title: "Hyperbola", page: 190, summary: "Summary page 193", exercises: "Exercises 10.3 page 194" },
            { number: "10.4", title: "Parabola", page: 196, summary: "Summary page 199", exercises: "Exercises 10.4 page 199" },
            { number: "Self-test", title: "Self-assessment test 10", page: 202, summary: "", exercises: "" }
        ]
    },
    {
        id: 11,
        title: "Vectors in the Plane",
        description: "Concepts and operations on vectors in the plane",
        category: "geometry",
        filename: "chapter11.html",
        sections: [
            { number: "11.1", title: "Vector concept in the plane", page: 204, summary: "Summary page 205", exercises: "Exercises 11.1 page 205" },
            { number: "11.2", title: "Linear operations", page: 206, summary: "Summary page 209", exercises: "Exercises 11.2 page 210" },
            { number: "11.3", title: "Coordinates and operations", page: 210, summary: "Summary page 214", exercises: "Exercises 11.3 page 214" },
            { number: "11.4", title: "Dot product", page: 215, summary: "Summary page 218", exercises: "Exercises 11.4 page 218" },
            { number: "Self-test", title: "Self-assessment test 11", page: 219, summary: "", exercises: "" }
        ]
    },
    {
        id: 12,
        title: "Vectors in Space",
        description: "Coordinate system and operations on vectors in space",
        category: "geometry",
        filename: "chapter12.html",
        sections: [
            { number: "12.1", title: "Cartesian coordinate system in space", page: 221, summary: "Summary page 225", exercises: "Exercises 12.1 page 226" },
            { number: "12.2", title: "Coordinates and operations", page: 227, summary: "Summary page 230", exercises: "Exercises 12.2 page 231" },
            { number: "12.3", title: "Dot product", page: 232, summary: "Summary page 234", exercises: "Exercises 12.3 page 235" },
            { number: "Self-test", title: "Self-assessment test 12", page: 235, summary: "", exercises: "" }
        ]
    },
    {
        id: 13,
        title: "Planes and Lines in Space",
        description: "Equations and relative positions in space",
        category: "geometry",
        filename: "chapter13.html",
        sections: [
            { number: "13.1", title: "Equation of a plane", page: 237, summary: "Summary page 239", exercises: "Exercises 13.1 page 239" },
            { number: "13.2", title: "Relative positions of two planes", page: 239, summary: "Summary page 242", exercises: "Exercises 13.2 page 243" },
            { number: "13.3", title: "Distance between parallel planes", page: 244, summary: "Summary page 245", exercises: "Exercises 13.3 page 245" },
            { number: "13.4", title: "Equation of a line", page: 246, summary: "Summary page 248", exercises: "Exercises 13.4 page 249" },
            { number: "13.5", title: "Relative positions of lines", page: 250, summary: "Summary page 252", exercises: "Exercises 13.5 page 252" },
            { number: "13.6", title: "Line-plane positions", page: 253, summary: "Summary page 258", exercises: "Exercises 13.6 page 258" },
            { number: "Self-test", title: "Self-assessment test 13", page: 256, summary: "", exercises: "" }
        ]
    },
    {
        id: 14,
        title: "Limits of Sequences and Functions",
        description: "Limit concepts, continuity and infinitesimals",
        category: "calculus",
        filename: "chapter14.html",
        sections: [
            { number: "14.1", title: "Limit of a sequence", page: 258, summary: "Summary page 260", exercises: "Exercises 14.1 page 261" },
            { number: "14.2", title: "Limit of a function", page: 261, summary: "Summary page 266", exercises: "Exercises 14.2 page 268" },
            { number: "14.3", title: "Continuous functions", page: 269, summary: "Summary page 270", exercises: "Exercises 14.3 page 270" },
            { number: "14.4", title: "Two important limits", page: 271, summary: "Summary page 273", exercises: "Exercises 14.4 page 274" },
            { number: "14.5", title: "Infinitesimals", page: 275, summary: "Summary page 277", exercises: "Exercises 14.5 page 278" },
            { number: "Self-test", title: "Self-assessment test 14", page: 278, summary: "", exercises: "" }
        ]
    },
    {
        id: 15,
        title: "Derivatives",
        description: "Derivative concepts and differentiation techniques",
        category: "calculus",
        filename: "chapter15.html",
        sections: [
            { number: "15.1", title: "Derivative concept", page: 280, summary: "Summary page 283", exercises: "Exercises 15.1 page 284" },
            { number: "15.2", title: "Differentiation rules", page: 285, summary: "Summary page 287", exercises: "Exercises 15.2 page 288" },
            { number: "15.3", title: "Higher order derivatives", page: 288, summary: "Summary page 290", exercises: "Exercises 15.3 page 290" },
            { number: "15.4", title: "Implicit function derivative", page: 291, summary: "Summary page 292", exercises: "Exercises 15.4 page 292" },
            { number: "15.5", title: "Parametric function derivative", page: 293, summary: "Summary page 295", exercises: "Exercises 15.5 page 295" },
            { number: "Self-test", title: "Self-assessment test 15", page: 296, summary: "", exercises: "" }
        ]
    },
    {
        id: 16,
        title: "Applications of Derivatives",
        description: "Using derivatives to study functions",
        category: "calculus",
        filename: "chapter16.html",
        sections: [
            { number: "16.1", title: "Derivative and monotonicity", page: 297, summary: "Summary page 299", exercises: "Exercises 16.1 page 299" },
            { number: "16.2", title: "Derivative, extrema and optimal values", page: 300, summary: "Summary page 304", exercises: "Exercises 16.2 page 305" },
            { number: "Self-test", title: "Self-assessment test 16", page: 305, summary: "", exercises: "" }
        ]
    },
    {
        id: 17,
        title: "Permutations and Combinations",
        description: "Counting principles and binomial theorem",
        category: "probability",
        filename: "chapter17.html",
        sections: [
            { number: "17.1", title: "Addition and multiplication principles", page: 307, summary: "Summary page 308", exercises: "Exercises 17.1 page 308" },
            { number: "17.2", title: "Permutations and number of permutations", page: 309, summary: "Summary page 310", exercises: "Exercises 17.2 page 311" },
            { number: "17.3", title: "Combinations and number of combinations", page: 311, summary: "Summary page 313", exercises: "Exercises 17.3 page 314" },
            { number: "17.4", title: "Binomial theorem", page: 314, summary: "Summary page 316", exercises: "Exercises 17.4 page 316" },
            { number: "Self-test", title: "Self-assessment test 17", page: 316, summary: "", exercises: "" }
        ]
    },
    {
        id: 18,
        title: "Random Events and Probability",
        description: "Fundamental concepts of probability theory",
        category: "probability",
        filename: "chapter18.html",
        sections: [
            { number: "18.1", title: "Random events and operations", page: 318, summary: "Summary page 320", exercises: "Exercises 18.1 page 321" },
            { number: "18.2", title: "Definition and properties of probability", page: 322, summary: "Summary page 323", exercises: "Exercises 18.2 page 323" },
            { number: "18.3", title: "Classical probability model", page: 324, summary: "Summary page 326", exercises: "Exercises 18.3 page 326" },
            { number: "18.4", title: "Conditional probability", page: 327, summary: "Summary page 329", exercises: "Exercises 18.4 page 330" },
            { number: "18.5", title: "Independence of events", page: 331, summary: "Summary page 333", exercises: "Exercises 18.5 page 333" },
            { number: "Self-test", title: "Self-assessment test 18", page: 334, summary: "", exercises: "" }
        ]
    },
    {
        id: 19,
        title: "Random Variables and Numerical Characteristics",
        description: "Discrete random variables, normal distribution and characteristics",
        category: "probability",
        filename: "chapter19.html",
        sections: [
            { number: "19.1", title: "Discrete random variable and probability distribution", page: 336, summary: "Summary page 338", exercises: "Exercises 19.1 page 339" },
            { number: "19.2", title: "Numerical characteristics", page: 340, summary: "Summary page 341", exercises: "Exercises 19.2 page 342" },
            { number: "19.3", title: "Normal distribution", page: 342, summary: "Summary page 345", exercises: "Exercises 19.3 page 345" },
            { number: "Self-test", title: "Self-assessment test 19", page: 347, summary: "", exercises: "" }
        ]
    },
    {
        id: 20,
        title: "Statistics",
        description: "Basic concepts in statistics and data analysis",
        category: "probability",
        filename: "chapter20.html",
        sections: [
            { number: "20.1", title: "Basic concepts in statistics", page: 349, summary: "Summary page 350", exercises: "Exercises 20.1 page 351" },
            { number: "20.2", title: "Numerical characteristics of data", page: 351, summary: "Summary page 353", exercises: "Exercises 20.2 page 353" },
            { number: "Self-test", title: "Self-assessment test 20", page: 354, summary: "", exercises: "" }
        ]
    },
    // NOUVEAUX CHAPITRES AJOUTÉS
    {
        id: 21,
        title: "Linear Algebra",
        description: "Matrices, determinants and linear transformations",
        category: "algebra",
        filename: "chapter21.html",
        sections: [
            { number: "21.1", title: "Introduction to matrices", page: 355, summary: "Summary page 357", exercises: "Exercises 21.1 page 358" },
            { number: "21.2", title: "Matrix operations", page: 359, summary: "Summary page 362", exercises: "Exercises 21.2 page 363" },
            { number: "21.3", title: "Determinants", page: 364, summary: "Summary page 367", exercises: "Exercises 21.3 page 368" },
            { number: "Self-test", title: "Self-assessment test 21", page: 369, summary: "", exercises: "" }
        ]
    },
    {
        id: 22,
        title: "Differential Equations",
        description: "Solving ordinary differential equations",
        category: "calculus",
        filename: "chapter22.html",
        sections: [
            { number: "22.1", title: "First order differential equations", page: 370, summary: "Summary page 373", exercises: "Exercises 22.1 page 374" },
            { number: "22.2", title: "Second order linear equations", page: 375, summary: "Summary page 378", exercises: "Exercises 22.2 page 379" },
            { number: "Self-test", title: "Self-assessment test 22", page: 380, summary: "", exercises: "" }
        ]
    }
    // Ajoutez d'autres chapitres ici suivant le même format
];