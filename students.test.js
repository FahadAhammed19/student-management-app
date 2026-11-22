import test from 'node:test';
import assert from 'node:assert/strict';
import {validate,searchStudents,readStudents} from './students.js';
const student={id:'1',name:'Ayesha Rahman',email:'ayesha@example.com',phone:'+880 1712 345678',department:'Computer Science'};
test('valid records pass and required fields report errors',()=>{assert.deepEqual(validate(student,[]),{});assert.equal(Object.keys(validate({name:' ',email:'invalid',phone:'12',department:''},[])).length,4)});
test('duplicate email is case insensitive but permits editing same record',()=>{assert.ok(validate({...student,email:'AYESHA@example.com'},[student]).email);assert.deepEqual(validate(student,[student],'1'),{})});
test('name search ignores case and surrounding spaces',()=>{assert.equal(searchStudents([student],' RAHMAN ').length,1);assert.equal(searchStudents([student],'unknown').length,0)});
test('storage restores records and rejects corrupted shapes',()=>{assert.deepEqual(readStudents({getItem:()=>JSON.stringify([student])}),[student]);assert.throws(()=>readStudents({getItem:()=>'{broken'}));assert.throws(()=>readStudents({getItem:()=>JSON.stringify([{}])}));assert.deepEqual(readStudents({getItem:()=>null}),[])});
