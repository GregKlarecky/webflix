import { environment } from '../../environments/environment';
import { ApiField } from '../interfaces/api-fields.interface';

export class ApiQueryBuilder {
  public query: string;

  constructor(
    private id?: string,
    private part?: string[],
    private fields?: Array<ApiField | string>
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

    this.query = `?${params.filter(param => param).join('&')}`;
  }

  private buildKey(): string {
    return `key=${environment.youtubeKey}`;
  }

  private buildId(): string {
    return this.id ? `id=${this.id}` : null;
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
    return this.fields ? `fields=items(${this.mapFields(this.fields)})` : null;
  }

  private buildPart(): string {
    return this.part ? `part=${this.part.join(',')}` : null;
  }
}
