import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: '1232342d-234fs23-sdfger23-23423fds2',
      name: 'Math class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation((returns) => LessonType)
  createLesson() {
    return {
      id: '1232342d-234fs23-sdfger23-23423fds2',
      name: 'Math class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
