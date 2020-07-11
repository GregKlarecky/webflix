import { environment } from '../../environments/environment';
import { ApiField } from '../interfaces/api-fields.interface';

export class ApiQueryBuilder {
  protected query: string;

  constructor(
    private id: string,
    private part: string[],
    private fields: Array<ApiField>
  ) {
    this.buildQuery();
  }

  private buildQuery() {
    const params = [
      this.buildKey(),
      this.buildId(),
      this.buildPart(),
      this.buildFields()
    ];

    this.query = `?${params.join('&')}`;
  }

  private buildKey(): string {
    return `key=${environment.youtubeKey}`;
  }

  private buildId(): string {
    return `id=${this.id}`;
  }

  private mapFields(fields: Array<ApiField | string>): string {
    const build = fields.map(field =>
      typeof field === 'string'
        ? field
        : `${(field as ApiField).name}(${this.mapFields(
            (field as ApiField).items
          )})`
    );
    return build.join(',');
  }

  private buildFields() {
    return `fields=${this.mapFields(this.fields)}`;
  }

  private buildPart(): string {
    return `part=${this.part.join(',')}`;
  }
}
