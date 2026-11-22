export const KEY = 'fahad-students-v1';
export const blank = {name:'',email:'',phone:'',department:''};
export function validate(student, records, editingId) {
  const errors = {};
  if (!student.name.trim()) errors.name = 'Enter the student’s name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email.trim())) errors.email = 'Enter a valid email address.';
  else if (records.some(s=>s.id!==editingId && s.email.toLowerCase()===student.email.trim().toLowerCase())) errors.email = 'A student with this email already exists.';
  if (!/^[+\d\s().-]+$/.test(student.phone) || student.phone.replace(/\D/g,'').length<7 || student.phone.replace(/\D/g,'').length>15) errors.phone = 'Enter a phone number with 7–15 digits.';
  if (!student.department.trim()) errors.department = 'Enter a department.';
  return errors;
}
export function searchStudents(records, query) { return records.filter(s=>s.name.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())); }
export function readStudents(storage) {
  const parsed = JSON.parse(storage.getItem(KEY) || '[]');
  if (!Array.isArray(parsed) || parsed.some(s=>!s || typeof s.id!=='string' || Object.keys(blank).some(k=>typeof s[k]!=='string'))) throw new Error('Invalid saved records');
  return parsed;
}
