import { v4 as uuidv4 } from "uuid";
export default function EnrollmentsDao(db) {
  function isEnrolled(userId, courseId) {
    return db.enrollments.some(
      (e) => e.user === userId && e.course === courseId,
    );
  }
  function enrollUserInCourse(userId, courseId) {
    if (isEnrolled(userId, courseId)) return;
    db.enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
  }
  function unenrollUserFromCourse(userId, courseId) {
    db.enrollments = db.enrollments.filter(
      (e) => !(e.user === userId && e.course === courseId),
    );
  }
  function findEnrollmentsForUser(userId) {
    return db.enrollments.filter((e) => e.user === userId);
  }
  function findUsersForCourse(courseId) {
    return db.users.filter((user) => isEnrolled(user._id, courseId));
  }
  return {
    isEnrolled,
    enrollUserInCourse,
    unenrollUserFromCourse,
    findEnrollmentsForUser,
    findUsersForCourse,
  };
}
