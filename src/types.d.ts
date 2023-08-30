type General = {
    name: string;
    email: string;
    phone: string;
};

type Education = {
    school: string;
    studyTitle: string;
    dateOfStudy: string;
};

type Practical = {
    companyName: string;
    positionTitle: string;
    responsabilities: string;
    dateOfWork: string;
};

type Details = {
    general: General;
    education: Education[];
    practical: Practical[];
};

export { General, Education, Practical, Details };