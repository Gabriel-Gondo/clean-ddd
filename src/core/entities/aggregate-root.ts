import { Entity } from "./entity";

export abstract class AggregateRoot<Props> extends Entity<Props> {
  //   private _domainEvents: DomainEvent[] = [];
  //   get domainEvents() {
  //     return this._domainEvents;
  //   }
  //   protected addDomainEvent(domainEvent: DomainEvent) {
  //     this._domainEvents.push(domainEvent);
  //   }
  //   public clearEvents() {
  //     this._domainEvents.splice(0, this._domainEvents.length);
  //   }
}
