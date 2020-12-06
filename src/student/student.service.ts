import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Student } from './student.entity';
import { CreateStudentInput } from './create-student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async getStudent(id: string): Promise<Student> {
    const student = await this.studentRepository.findOne({ id });

    if (!student) {
    }

    return student;
  }

  async getStudents(): Promise<Student[]> {
    const students = await this.studentRepository.find();

    if (!students) {
    }

    return students;
  }

  async createStudent(createLessonInput: CreateStudentInput): Promise<Student> {
    const { firstName, lastName } = createLessonInput;

    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    return this.studentRepository.save(student);
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentRepository.find({
      where: {
        id: {
          $in: studentIds,
        },
      },
    });
  }
}
