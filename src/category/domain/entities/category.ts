export type CategoryProperties = {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};

export default class Category {
  constructor(public readonly props: CategoryProperties) {
    this.props.description = this.props.description;
    this.props.is_active = this.props.is_active ?? true;
    this.props.created_at = this.props.created_at ?? new Date();
  }

  private set description(value: string) {
    this.props.description = this.props.description ?? null;
  }

  private set is_active(value: boolean) {
    this.props.is_active = this.props.is_active ?? true;
  }
}
