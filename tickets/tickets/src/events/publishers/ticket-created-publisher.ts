import { Publisher, Subjects, TicketCreatedEvent } from '@not-a-bot/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
