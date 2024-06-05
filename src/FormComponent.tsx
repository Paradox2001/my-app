import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Education {
  name: string;
}

interface Certificate {
  addr: string;
}

interface Language {
  name: string;
}

interface Interest {
  name: string;
}

interface Skill {
  name: string;
}

const FormComponent: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [tel, setTel] = useState<string>('');
  const [addr, setAddr] = useState<string>('');
  const [exper, setExper] = useState<string>('');
  const [framework, setFramework] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [educationList, setEducationList] = useState<Education[]>([{ name: '' }]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [certificates, setCertificates] = useState<Certificate[]>([{ addr: '' }]);
  const [languages, setLanguages] = useState<Language[]>([{ name: '' }]);
  const [interests, setInterests] = useState<Interest[]>([{ name: '' }]);
  const [skills, setSkills] = useState<Skill[]>([{ name: '' }]);

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (firstName.trim() === '') {
      errors.firstName = 'Please enter your first name';
    }
    if (lastName.trim() === '') {
      errors.lastName = 'Please enter your last name';
    }
    if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (Object.keys(errors).length === 0) {
      console.log({ firstName, lastName, email, tel, addr, framework, message, educationList });
      window.open('/pdf.pdf', '_blank');
    } else {
      setErrors(errors);
    }
  };

  const handleCertificateChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    setCertificates((prevCertificates) => {
      const updatedCertificates = [...prevCertificates];
      updatedCertificates[index].addr = value;
      return updatedCertificates;
    });
  };

  const addCertificate = () => {
    setCertificates((prevCertificates) => [...prevCertificates, { addr: '' }]);
  };

  const removeCertificate = (index: number) => {
    setCertificates((prevCertificates) => prevCertificates.filter((_, i) => i !== index));
  };

  const handleLanguageChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    setLanguages((prevLanguages) => {
      const updatedLanguages = [...prevLanguages];
      updatedLanguages[index].name = value;
      return updatedLanguages;
    });
  };

  const addLanguage = () => {
    setLanguages((prevLanguages) => [...prevLanguages, { name: '' }]);
  };

  const removeLanguage = (index: number) => {
    setLanguages((prevLanguages) => prevLanguages.filter((_, i: number) => i !== index));
  };

  const handleInterestChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    setInterests((prevInterests) => {
      const updatedInterests = [...prevInterests];
      updatedInterests[index].name = value;
      return updatedInterests;
    });
  };

  const addInterest = () => {
    setInterests((prevInterests) => [...prevInterests, { name: '' }]);
  };

  const removeInterest = (index: number) => {
    setInterests((prevInterests) => prevInterests.filter((_, i: number) => i !== index));
  };

  const handleSkillChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    setSkills((prevSkills) => {
      const updatedSkills = [...prevSkills];
      updatedSkills[index].name = value;
      return updatedSkills;
    });
  };

  const addSkill = () => {
    setSkills((prevSkills) => [...prevSkills, { name: '' }]);
  };

  const removeSkill = (index: number) => {
    setSkills((prevSkills) => prevSkills.filter((_, i: number) => i !== index));
  };

  return (
    <form className="form bg-gray-800 text-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <div className="personal-info-container mb-6">
        <h2 className="text-2xl mb-4">Entrez vos Informations</h2>
        <div className="form-group mb-4">
          <label className="block mb-2">NOM</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 border border-gray-600"
          />
          {errors.firstName && <div className="error text-red-500">{errors.firstName}</div>}
        </div>
        <div className="form-group mb-4">
          <label className="block mb-2">Prénom</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 border border-gray-600"
          />
          {errors.lastName && <div className="error text-red-500">{errors.lastName}</div>}
        </div>
        <div className="form-group mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 border border-gray-600"
          />
          {errors.email && <div className="error text-red-500">{errors.email}</div>}
        </div>
        <div className="form-group mb-4">
          <label className="block mb-2">Numéro Téléphone</label>
          <input
            type="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 border border-gray-600"
          />
          {/* Add validation for telephone if needed */}
        </div>
        <div className="form-group mb-4">
          <label className="block mb-2">Adresse</label>
          <input
            type="text"
            value={addr}
            onChange={(e) => setAddr(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 border border-gray-600"
          />
          {/* Add validation for address if needed */}
        </div>
        <div className="form-group mb-4">
          <label className="block mb-2">Expérience</label>
          <input
            type="text"
            value={exper}
            onChange={(e) => setExper(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 border border-gray-600"
          />
        </div>
        <div>
          {certificates.map((certificate, index) => (
            <div className="form-group mb-4" key={index}>
              <label className="block mb-2">Certificats</label>
              <input
                type="text"
                value={certificate.addr}
                onChange={(e) => handleCertificateChange(e, index)}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600"
              />
              <button
                type="button"
                onClick={() => removeCertificate(index)}
                className="mt-2 bg-red-500 text-white p-2 rounded-md"
              >
                Supprimer
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addCertificate}
            className="bg-blue-500 text-white p-2 rounded-md w-full mt-2"
          >
            + Ajouter un certificat
          </button>
        </div>
        <h3 className="text-xl mt-6 mb-4">Langue</h3>
        <div>
          {languages.map((language, index) => (
            <div className="form-group mb-4" key={index}>
              <label className="block mb-2">Langue</label>
              <input
                type="text"
                value={language.name}
                onChange={(e) => handleLanguageChange(e, index)}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600"
              />
              <button
                type="button"
                onClick={() => removeLanguage(index)}
                className="mt-2 bg-red-500 text-white p-2 rounded-md"
              >
                Supprimer
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addLanguage}
            className="bg-blue-500 text-white p-2 rounded-md w-full mt-2"
          >
            + Ajouter une langue
          </button>
        </div>
        <h3 className="text-xl mt-6 mb-4">Intérêts</h3>
        <div>
          {interests.map((interest, index) => (
            <div className="form-group mb-4" key={index}>
              <label className="block mb-2">Intérêt</label>
              <input
                type="text"
                value={interest.name}
                onChange={(e) => handleInterestChange(e, index)}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600"
              />
              <button
                type="button"
                onClick={() => removeInterest(index)}
                className="mt-2 bg-red-500 text-white p-2 rounded-md"
              >
                Supprimer
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addInterest}
            className="bg-blue-500 text-white p-2 rounded-md w-full mt-2"
          >
            + Ajouter un intérêt
          </button>
        </div>
        <h3 className="text-xl mt-6 mb-4">Compétences</h3>
        <div>
          {skills.map((skill, index) => (
            <div className="form-group mb-4" key={index}>
              <label className="block mb-2">Compétence</label>
              <input
                type="text"
                value={skill.name}
                onChange={(e) => handleSkillChange(e, index)}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600"
              />
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="mt-2 bg-red-500 text-white p-2 rounded-md"
              >
                Supprimer
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addSkill}
            className="bg-blue-500 text-white p-2 rounded-md w-full mt-2"
          >
            + Ajouter une compétence
          </button>
        </div>
        <div className="form-group mb-4">
          <label className="block mb-2">Framework</label>
          <input
            type="text"
            value={framework}
            onChange={(e) => setFramework(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 border border-gray-600"
          />
        </div>
        <div className="form-group mb-4">
          <label className="block mb-2">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 border border-gray-600"
          />
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">
        Envoyer
      </button>
    </form>
  );
};

export default FormComponent;
