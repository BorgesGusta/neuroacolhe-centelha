import React from 'react';
import { CheckCircle2, Circle, Clock, Flag, Video, CheckSquare } from 'lucide-react';

export interface Milestone {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'pending';
  date?: string;
  type: 'intake' | 'checkin' | 'teleconsultation' | 'engagement';
}

interface JourneyMilestonesProps {
  milestones: Milestone[];
}

export default function JourneyMilestones({ milestones }: JourneyMilestonesProps) {
  const getIcon = (type: Milestone['type'], status: Milestone['status']) => {
    if (status === 'completed') {
      return <CheckCircle2 className="w-5 h-5 text-brand-secondary" />;
    }
    if (status === 'current') {
      return <Clock className="w-5 h-5 text-brand-primary animate-pulse" />;
    }
    return <Circle className="w-5 h-5 text-slate-300" />;
  };

  const getThemeIcon = (type: Milestone['type']) => {
    switch (type) {
      case 'intake': return <Flag className="w-4 h-4" />;
      case 'checkin': return <CheckSquare className="w-4 h-4" />;
      case 'teleconsultation': return <Video className="w-4 h-4" />;
      case 'engagement': return <CheckCircle2 className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-brand-border p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Marcos da Jornada</h3>
        <p className="text-sm text-slate-500">Acompanhe seu progresso na plataforma Acolly.</p>
      </div>

      <div className="relative border-l border-slate-200 ml-3 space-y-8">
        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="relative pl-6">
            <div className="absolute -left-3 top-0.5 bg-white">
              {getIcon(milestone.type, milestone.status)}
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className={`text-base font-medium ${
                  milestone.status === 'pending' ? 'text-slate-500' : 'text-slate-800'
                }`}>
                  {milestone.title}
                </h4>
                <p className="text-sm text-slate-500 mt-1">{milestone.description}</p>
              </div>
              
              {milestone.date && (
                <div className="text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded-md self-start sm:self-auto">
                  {milestone.date}
                </div>
              )}
            </div>
            
            <div className="mt-2 flex items-center gap-1">
               <span className={`text-xs px-2 py-0.5 rounded-full flex items-center gap-1 ${
                 milestone.status === 'completed' ? 'bg-brand-secondary/10 text-brand-secondary-dark' :
                 milestone.status === 'current' ? 'bg-brand-primary/10 text-brand-primary-dark' :
                 'bg-slate-100 text-slate-500'
               }`}>
                 {getThemeIcon(milestone.type)}
                 <span className="capitalize">{milestone.type === 'teleconsultation' ? 'Teleconsulta' : milestone.type === 'intake' ? 'Triagem' : milestone.type === 'checkin' ? 'Check-in' : 'Engajamento'}</span>
               </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
