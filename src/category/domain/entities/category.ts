export type CategoryProperties = {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};

export default class Category {
  constructor(public readonly props: CategoryProperties) {}
}
