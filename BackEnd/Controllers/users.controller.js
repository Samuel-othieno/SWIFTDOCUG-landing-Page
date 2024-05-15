import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

const prisma = new PrismaClient();


// //FIND ONLY ONE PATIENT USING EMAIL AS A UNIQUE ATTRIBUTE. ==================================================================================================================
async function findUniquePatient(req, res) {
  const uniqueEmail = req.body.email;

  try {
    if (!uniqueEmail) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Invalid email address" });
    }

    const uniquePatientExits = await prisma.user.findUnique({
      where: {
        email: uniqueEmail,
      },
    });

    if (!uniquePatientExits) {
      res.status(StatusCodes.NOT_FOUND).json({ message: "Patient not found" });
    } else {
      res
        .status(StatusCodes.ACCEPTED)
        .json({ message: "SUCCESS! Patients found", uniquePatientExits });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Operation failure! Please try again" });
  }
}

// async function findPatients(req, res) {
//   try {
//     const Patient = await prisma.user.findMany();
//     res
//       .status(StatusCodes.ACCEPTED)
//       .json({ message: "SUCCESS! Patients found", Patient });
//   } catch (error) {
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ error: "Operation failure! Please try again" });
//   }
// }

// async function createNewPatient(req, res) {
//   const email = req.body.email;
//   try {
//     const Patient = await prisma.user.findUnique({
//       where: {
//         email: email,
//       },
//     });

//     if (Patient != null && Patient.email === email) {
//       res
//         .status(StatusCodes.CONFLICT)
//         .json({ message: "Email already in use" });
//     } else {
//       const newPatient = await prisma.user.create({
//         data: req.body,
//       });
//       res
//         .status(StatusCodes.CREATED)
//         .json({ message: "SUCCESS! New Patient added", newPatient });
//     }
//   } catch (error) {
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ error: "Operation failure! Please try again" });
//   }
// }

// async function deletePatient(req, res) {
//   try {
//     const Patient = await prisma.user.deleteMany({});
//     res
//       .status(StatusCodes.OK)
//       .json({ message: "SUCCESS! Patients deleted", Patient });
//   } catch (error) {
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ error: "Operation failure! Please try again" });
//   }
// }

// async function updatePatient(req, res) {
//   const { uniqueEmail, newEmail } = req.body;

//   try {
//     if (!newEmail) {
//       res
//         .status(StatusCodes.BAD_REQUEST)
//         .json({ message: "New email required" });
//     }

//     if (!uniqueEmail) {
//       res
//         .status(StatusCodes.BAD_REQUEST)
//         .json({ message: "Unique email required" });
//     }

//     if (newEmail === uniqueEmail) {
//       res
//         .status(StatusCodes.CONFLICT)
//         .json({ message: "New email can not be the same as existing" });
//     }

//     const existingPatient = await prisma.user.findUnique({
//       where: {
//         email: newEmail,
//       },
//     });
//     const noExistingPatient = await prisma.user.findUnique({
//       where: {
//         email: uniqueEmail,
//       },
//     });

//     if (!noExistingPatient) {
//       res.status(StatusCodes.BAD_REQUEST).json({ message: "Patient not found" });
//     }

//     if (existingPatient) {
//       res
//         .status(StatusCodes.BAD_REQUEST)
//         .json({ message: "Email already exists" });
//     } else {
//       const Patient = await prisma.user.update({
//         where: {
//           email: uniqueEmail,
//         },
//         data: {
//           email: newEmail,
//         },
//       });
//       res
//         .status(StatusCodes.ACCEPTED)
//         .json({ message: "SUCCESS! Patient updated", Patient });
//     }
//   } catch (error) {
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ error: "Operation failed" });
//   }
// }

// async function deleteUniquePatient(req, res) {
//   const PatientEmail = req.body.email;
//   try {
//     if (!PatientEmail) {
//       res.status(StatusCodes.NOT_FOUND).json({ message: "Email required" });
//     }

//     const PatientExists = await prisma.user.findUnique({
//       where: {
//         email: PatientEmail,
//       },
//     });

//     if (!PatientExists) {
//       res.status(StatusCodes.NOT_FOUND).json({ message: "Patient not found" });
//     } else {
//       await prisma.user.delete({
//         where: {
//           email: PatientEmail,
//         },
//       });
//       res.status(StatusCodes.OK).json({ message: "SUCCESS! Patient deleted" });
//     }
//   } catch (error) {
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ error: "Operation failure! Please try again" });
//   }
// }

export {
  findUniquePatient,
  // findPatients,
  // updatePatient,
  // createNewPatient,
  // deletePatient,
  // deleteUniquePatient
};