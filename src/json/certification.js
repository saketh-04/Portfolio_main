// src/json/certification.js
// NOTE: file paths assume assets are under src/assets/certifications/
// Adjust names if your files differ.

import oracle1_jpg from "../assets/certifications/oracle 1.jpg";
import oracle1_pdf from "../assets/certifications/oracle 1.pdf";

import oracle2_jpeg from "../assets/certifications/oracle 2.jpeg";
import oracle2_pdf from "../assets/certifications/oracle 2.pdf";

import oracle3_jpeg from "../assets/certifications/oracle 3.jpeg";
import oracle3_pdf from "../assets/certifications/oracle 3.pdf";

import oracle4_jpeg from "../assets/certifications/oracle 4.jpeg";
import oracle4_pdf from "../assets/certifications/oracle 4.pdf";

import oracle5_jpg from "../assets/certifications/oracle 5.jpg";
import oracle5_pdf from "../assets/certifications/oracle 5.pdf";

import oracle6_jpg from "../assets/certifications/oracle 6.jpg";
import oracle6_pdf from "../assets/certifications/oracle 6.pdf";

import oracle7_jpg from "../assets/certifications/oracle 7.jpg";
import oracle7_pdf from "../assets/certifications/oracle 7.pdf";

/* AWS images + pdfs you listed */
import aws_cp_png from "../assets/certifications/AWS Cloud Practitioner.png";
import aws_cp_pdf from "../assets/certifications/AWS Cloud Practitioner.pdf";

import aws_cloud_quest_png from "../assets/certifications/AWS cloud quest.png";
import aws_cloud_quest_pdf from "../assets/certifications/AWS cloud quest.png"; // if pdf missing, fallback to same image

/* PDFs that you mentioned (SkillUp / Simplilearn) */
import skillup_pdf from "../assets/certifications/Skill up.pdf";
import simplilearn_pdf from "../assets/certifications/simpl.pdf";

/* Any other certificates (devx.jpg etc.) - add only if available */
import devx_jpg from "../assets/certifications/devx.jpg";

/* Build dataset */
const certificationsData = {
  certifications: [
    // Oracle series (badges + PDF)
    {
      id: "oracle-1",
      title: "Oracle APEX Cloud Developer Certified Professional",
      organization: "Oracle",
      issueDate: "2025-09-01",
      credentialID: "ORCL-APEX-2025-01",
      credentialURL: "", // add if you have verification link
      image: oracle1_jpg,
      pdf: oracle1_pdf,
      badges: [
        oracle1_jpg,
        oracle2_jpeg,
        oracle3_jpeg,
        oracle4_jpeg,
        oracle5_jpg,
        oracle6_jpg,
        oracle7_jpg,
      ],
      skills: ["Oracle APEX", "SQL"],
      description: "Oracle APEX Cloud Developer certification — hands-on APEX development and cloud-native database skills."
    },

    {
      id: "oracle-2",
      title: "Oracle Cloud Infrastructure Foundations Associate",
      organization: "Oracle",
      issueDate: "2025-09-07",
      credentialID: "ORCL-FOUND-2025-01",
      credentialURL: "",
      image: oracle2_jpeg,
      pdf: oracle2_pdf,
      badges: [oracle2_jpeg],
      skills: ["OCI", "Cloud Basics"],
      description: "Foundations associate certificate for Oracle Cloud Infrastructure."
    },

    {
      id: "oracle-3",
      title: "Oracle Fusion AI Agent Studio Certified Foundations Associate - Rel 1",
      organization: "Oracle",
      issueDate: "2025-09-07",
      credentialID: "ORCL-AIAGENT-2025-01",
      credentialURL: "",
      image: oracle3_jpeg,
      pdf: oracle3_pdf,
      badges: [oracle3_jpeg],
      skills: ["AI", "NLP"],
      description: "Oracle AI Agent Studio foundation certification."
    },

    {
      id: "oracle-4",
      title: "Oracle Cloud Infrastructure AI Foundations Associate",
      organization: "Oracle",
      issueDate: "2025-09-07",
      credentialID: "ORCL-AI-2025-01",
      credentialURL: "",
      image: oracle4_jpeg,
      pdf: oracle4_pdf,
      badges: [oracle4_jpeg],
      skills: ["OCI AI", "Generative AI"],
      description: "OCI AI Foundations — vector search, model deployment basics."
    },

    {
      id: "oracle-5",
      title: "Oracle Cloud Infrastructure Generative AI Professional",
      organization: "Oracle",
      issueDate: "2025-09-08",
      credentialID: "ORCL-GAI-2025-01",
      credentialURL: "",
      image: oracle5_jpg,
      pdf: oracle5_pdf,
      badges: [oracle5_jpg],
      skills: ["Generative AI", "OCI"],
      description: "Generative AI professional certificate on Oracle Cloud."
    },

    {
      id: "oracle-6",
      title: "Oracle AI Vector Search Certified Professional",
      organization: "Oracle",
      issueDate: "2025-09-15",
      credentialID: "ORCL-VEC-2025-01",
      credentialURL: "",
      image: oracle6_jpg,
      pdf: oracle6_pdf,
      badges: [oracle6_jpg],
      skills: ["Vector Search", "Retrieval"],
      description: "Certificate focused on vector search and retrieval techniques on Oracle Cloud."
    },

    {
      id: "oracle-7",
      title: "Oracle Cloud Infrastructure Data Science Professional",
      organization: "Oracle",
      issueDate: "2025-10-27",
      credentialID: "ORCL-DS-2025-01",
      credentialURL: "",
      image: oracle7_jpg,
      pdf: oracle7_pdf,
      badges: [oracle7_jpg],
      skills: ["Data Science", "OCI"],
      description: "Data Science professional certification on Oracle Cloud."
    },

    // AWS / other certificates (image + pdf). SkillUp & Simplilearn: PDF only (no badge)
    {
      id: "aws-cp",
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      issueDate: "2025-01-01",
      credentialID: "AWS-CP-2025-01",
      credentialURL: "",
      image: aws_cp_png,
      pdf: aws_cp_pdf,
      badges: [aws_cp_png],
      skills: ["AWS Basics"],
      description: "AWS Cloud Practitioner certification."
    },

    {
      id: "aws-quest",
      title: "AWS Cloud Quest",
      organization: "Amazon Web Services",
      issueDate: "2025-01-01",
      credentialID: "AWS-QUEST-2025-01",
      credentialURL: "",
      image: aws_cloud_quest_png,
      pdf: aws_cloud_quest_pdf,
      badges: [aws_cloud_quest_png],
      skills: ["AWS", "Generative AI"],
      description: "AWS Cloud Quest achievements / badges."
    },

    {
      id: "skillup",
      title: "SkillUp Certificate",
      organization: "SkillUp",
      issueDate: "2024-08-01",
      credentialID: "SKILLUP-2024-01",
      credentialURL: "",
      image: null, // no badge
      pdf: skillup_pdf,
      badges: [],
      skills: [],
      description: "SkillUp course certificate (PDF only)."
    },

    {
      id: "simplilearn",
      title: "Simplilearn Certificate",
      organization: "Simplilearn",
      issueDate: "2023-12-31",
      credentialID: "SIMPL-2023-01",
      credentialURL: "",
      image: null,
      pdf: simplilearn_pdf,
      badges: [],
      skills: [],
      description: "Simplilearn course certificate (PDF only)."
    },

    // Development / other images
    {
      id: "devx",
      title: "DevX Certificate",
      organization: "DevX",
      issueDate: "2025-06-01",
      credentialID: "DEVX-2025-01",
      credentialURL: "",
      image: devx_jpg,
      pdf: null,
      badges: [devx_jpg],
      skills: ["Dev Tools"],
      description: "DevX certificate image."
    }
  ],
  licenses: []
};

export default certificationsData;
