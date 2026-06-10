export type NotificationChannel = 'whatsapp' | 'email' | 'push';
export type NotificationStatus = 'scheduled' | 'sent' | 'delivered' | 'failed';
export type NotificationType = 'checkin' | 'teleconsultation' | 'intake_confirmation' | 'presence_reminder';

export interface NotificationLog {
  id: string;
  recipientId: string;
  recipientName: string;
  type: NotificationType;
  channel: NotificationChannel;
  content: string;
  status: NotificationStatus;
  scheduledAt: string;
  sentAt?: string;
}

/**
 * Serviço mockado de notificações.
 * Preparado para futura integração com APIs reais (Ex: WhatsApp Cloud API, SendGrid, etc).
 */
class NotificationService {
  private logs: NotificationLog[] = [];

  private logNotification(notification: Omit<NotificationLog, 'id' | 'status'>): NotificationLog {
    const newLog: NotificationLog = {
      ...notification,
      id: Math.random().toString(36).substr(2, 9),
      status: 'sent',
      sentAt: new Date().toISOString(),
    };
    this.logs.push(newLog);
    console.log(`[NotificationService] Enviado via ${newLog.channel}:`, newLog.content);
    return newLog;
  }

  getLogs() {
    return [...this.logs].reverse();
  }

  // Métodos Mockados Específicos
  
  sendWhatsAppReminder(recipientId: string, recipientName: string, content: string) {
    return this.logNotification({
      recipientId,
      recipientName,
      type: 'presence_reminder',
      channel: 'whatsapp',
      content,
      scheduledAt: new Date().toISOString(),
    });
  }

  sendEmailReminder(recipientId: string, recipientName: string, content: string) {
    return this.logNotification({
      recipientId,
      recipientName,
      type: 'presence_reminder',
      channel: 'email',
      content,
      scheduledAt: new Date().toISOString(),
    });
  }

  scheduleCheckInReminder(recipientId: string, recipientName: string, date: string) {
    const link = `https://app.acolly.com.br/paciente/check-in`;
    const content = `Olá, ${recipientName}. Seu check-in de bem-estar está disponível hoje. Leva menos de 1 minuto e ajuda a manter sua jornada atualizada. Acesse: ${link}`;
    return this.logNotification({
      recipientId,
      recipientName,
      type: 'checkin',
      channel: 'whatsapp',
      content,
      scheduledAt: date,
    });
  }

  scheduleTeleconsultationReminder(recipientId: string, recipientName: string, date: string, time: string) {
    const link = `https://app.acolly.com.br/paciente/teleconsulta`;
    const content = `Olá, ${recipientName}. Sua teleconsulta está agendada para hoje às ${time}. Acesse a plataforma para ver as orientações e entrar na sala: ${link}`;
    return this.logNotification({
      recipientId,
      recipientName,
      type: 'teleconsultation',
      channel: 'whatsapp',
      content,
      scheduledAt: date,
    });
  }

  sendTeleconsultationLink(recipientId: string, recipientName: string, meetingUrl: string) {
    const content = `Sua sala de teleconsulta já está disponível, ${recipientName}. Entre através deste link seguro: ${meetingUrl}`;
    return this.logNotification({
      recipientId,
      recipientName,
      type: 'teleconsultation',
      channel: 'whatsapp',
      content,
      scheduledAt: new Date().toISOString(),
    });
  }

  sendIntakeConfirmation(recipientId: string, recipientName: string) {
    const content = `Olá, ${recipientName}. Recebemos sua solicitação de triagem com sucesso. Em breve nossa equipe entrará em contato para os próximos passos.`;
    return this.logNotification({
      recipientId,
      recipientName,
      type: 'intake_confirmation',
      channel: 'email',
      content,
      scheduledAt: new Date().toISOString(),
    });
  }
}

export const notificationService = new NotificationService();
