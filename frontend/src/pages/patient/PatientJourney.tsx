import React from 'react';
import JourneyMilestones, { Milestone } from '../../components/JourneyMilestones';

export default function PatientJourney() {
  const milestones: Milestone[] = [
    {
      id: '1',
      title: 'Triagem Inicial',
      description: 'Formulário de identificação de necessidades preenchido.',
      status: 'completed',
      type: 'intake',
      date: '10 Mai 2026',
    },
    {
      id: '2',
      title: 'Primeiro Check-in',
      description: 'Você registrou como estava se sentindo.',
      status: 'completed',
      type: 'checkin',
      date: '12 Mai 2026',
    },
    {
      id: '3',
      title: 'Teleconsulta Agendada',
      description: 'Sua primeira teleconsulta foi agendada com a equipe.',
      status: 'completed',
      type: 'teleconsultation',
      date: '14 Mai 2026',
    },
    {
      id: '4',
      title: 'Jornada Ativa por 7 dias',
      description: 'Você está acompanhando seu bem-estar há uma semana.',
      status: 'current',
      type: 'engagement',
      date: 'Hoje',
    },
    {
      id: '5',
      title: 'Teleconsulta Concluída',
      description: 'Presença confirmada no encontro online.',
      status: 'pending',
      type: 'teleconsultation',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-slate-800">Sua Jornada</h1>
        <p className="text-slate-500 mt-1">Acompanhe seu progresso e os próximos passos no Nura.</p>
      </header>

      <JourneyMilestones milestones={milestones} />
    </div>
  );
}
