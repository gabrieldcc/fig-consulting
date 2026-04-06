import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  BriefcaseBusiness,
  ChartColumnIncreasing,
  CircleGauge,
  DatabaseZap,
  Gauge,
  Layers3,
  LayoutDashboard,
  MessageSquareMore,
  Radar,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'

export type NavigationItem = {
  id: string
  label: string
}

export type BadgeItem = {
  label: string
  logo?: string
}

export type BenefitItem = {
  title: string
  description: string
}

export type ServiceItem = {
  icon: LucideIcon
  title: string
  description: string
}

export type DifferentiatorItem = {
  icon: LucideIcon
  title: string
  description: string
}

export type MethodologyStep = {
  emoji: string
  title: string
  description: string
}

export type MetricItem = {
  emoji: string
  value: string
  label: string
  description: string
}

export type TestimonialItem = {
  quote: string
  name: string
  role: string
  company: string
}

export type FaqItem = {
  question: string
  answer: string
}

export const siteContent = {
  navigation: [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'beneficios', label: 'Benefícios' },
    { id: 'metodologia', label: 'Metodologia' },
    { id: 'cases', label: 'Cases' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contato', label: 'Contato' },
  ] satisfies NavigationItem[],
  badges: [
    { label: 'Business Intelligence' },
    { label: 'Data Analytics' },
    { label: 'Dashboards' },
    { label: 'Power BI', logo: 'powerbi' },
    { label: 'Fabric', logo: 'fabric' },
    { label: 'Copilot', logo: 'copilot' },
  ] satisfies BadgeItem[],
  benefits: [
    {
      title: 'Clareza para decidir',
      description:
        'Conectamos indicadores dispersos em uma leitura executiva simples e confiável para tomada de decisão.',
    },
    {
      title: 'Identificação de oportunidades',
      description:
        'Encontramos padrões de receita, margem e comportamento de vendas pra alavancar o crescimento do negócio.',
    },
    {
      title: 'Visão Estratégica do negócio',
      description:
        'Traduzimos números desconexos em leitura gerencial para acelerar decisões com prioridade.',
    },
    {
      title: 'Redução de ineficiência',
      description:
        'Eliminamos retrabalho analítico e diminuímos o tempo gasto com planilhas e relatórios manuais.',
    },
  ] satisfies BenefitItem[],
  services: [
    {
      icon: SearchCheck,
      title: 'Diagnóstico de dados',
      description:
        'Mapeamento de fontes, gargalos e maturidade analítica para definir os próximos passos com segurança.',
    },
    {
      icon: CircleGauge,
      title: 'Modelagem de indicadores',
      description:
        'Definição de KPIs, metas e estruturas de acompanhamento alinhadas aos objetivos da empresa.',
    },
    {
      icon: Bot,
      title: 'Automação de relatórios',
      description:
        'Rotinas que conectam bases, reduzem tarefas repetitivas e elevam a confiabilidade das entregas.',
    },
    {
      icon: TrendingUp,
      title: 'Análise de performance',
      description:
        'Leitura analítica de vendas, operações, marketing e finanças para orientar ajustes de rota.',
    },
    {
      icon: LayoutDashboard,
      title: 'Dashboards e BI',
      description:
        'Painéis executivos e operacionais com leitura intuitiva, foco em decisão e acompanhamento contínuo.',
    },
    {
      icon: DatabaseZap,
      title: 'Cultura data-driven',
      description:
        'Estruturação de rituais, governança, comunicação e treinamento para todo o time tornar os dados parte do dia a dia da gestão.',
    },
  ] satisfies ServiceItem[],
  differentiators: [
    {
      icon: Target,
      title: 'Abordagem personalizada',
      description:
        'Cada projeto nasce do contexto do cliente, sem pacote genérico nem recomendação desconectada da operação.',
    },
    {
      icon: BriefcaseBusiness,
      title: 'Foco em resultado de negócio',
      description:
        'A tecnologia é meio. O objetivo é melhorar margem, produtividade, previsibilidade e velocidade decisória.',
    },
    {
      icon: Radar,
      title: 'Visão analítica e estratégica',
      description:
        'Combinamos profundidade técnica com leitura executiva para transformar dado em direcionamento claro.',
    },
    {
      icon: Layers3,
      title: 'Implantação prática',
      description:
        'Desenhamos soluções que cabem na rotina da equipe e funcionam além da apresentação final.',
    },
    {
      icon: MessageSquareMore,
      title: 'Comunicação com gestores',
      description:
        'Priorizamos uma narrativa simples, objetiva e útil para acelerar alinhamento entre liderança e operação.',
    },
    {
      icon: ShieldCheck,
      title: 'Suporte ponta a ponta',
      description:
        'Acompanhamos do diagnóstico à adoção, garantindo evolução contínua e maior aproveitamento das entregas.',
    },
  ] satisfies DifferentiatorItem[],
  methodology: [
    {
      emoji: '🔎',
      title: 'Diagnóstico',
      description:
        'Levantamos objetivos, indicadores, bases e principais dores para priorizar o que mais gera impacto.',
    },
    {
      emoji: '🧩',
      title: 'Estruturação',
      description:
        'Organizamos fontes, regras de negócio, KPIs e arquitetura analítica em um desenho claro e sustentável.',
    },
    {
      emoji: '⚙️',
      title: 'Implementação',
      description:
        'Construímos dashboards, automações e análises com foco em adoção rápida e valor percebido.',
    },
    {
      emoji: '🎓',
      title: 'Acompanhamento',
      description:
        'Monitoramos resultados, refinamos indicadores e aplicamos treinamento ao time após a entrega para sustentar a evolução da maturidade orientada por dados.',
    },
  ] satisfies MethodologyStep[],
  metrics: [
    {
      emoji: '📊',
      value: '+9',
      label: 'anos de experiência em dados',
      description: 'Histórico construindo leitura executiva e inteligência aplicada ao negócio.',
    },
    {
      emoji: '🌍',
      value: '+70',
      label: 'executivos de empresas globais consumindo dados',
      description: 'Entregas desenhadas para rotinas de gestão que exigem clareza e velocidade.',
    },
    {
      emoji: '📈',
      value: '+55',
      label: 'dashboards entregues',
      description: 'Painéis executivos e operacionais conectados aos indicadores que importam.',
    },
    {
      emoji: '⭐',
      value: '98%',
      label: 'satisfação em projetos consultivos',
      description: 'Relações de parceria sustentadas por entrega prática, próxima e confiável.',
    },
  ] satisfies MetricItem[],
  testimonials: [
    {
      quote:
        'A FigData transformou um cenário fragmentado em uma leitura executiva clara. Hoje conseguimos reagir mais rápido e decidir com muito mais segurança.',
      name: 'Mariana Teles',
      role: 'Diretora de Operações',
      company: 'Nexa Varejo',
    },
    {
      quote:
        'Os dashboards trouxeram visibilidade real para a gestão comercial. Reduzimos tempo de consolidação e ganhamos consistência nas reuniões de performance.',
      name: 'Renato Azevedo',
      role: 'Head Comercial',
      company: 'Atlas Industrial',
    },
    {
      quote:
        'O diferencial foi unir profundidade analítica com uma implementação prática. A equipe internalizou os indicadores e a operação ficou muito mais previsível.',
      name: 'Luciana Prado',
      role: 'CFO',
      company: 'Verda Saúde Integrada',
    },
  ] satisfies TestimonialItem[],
  faqs: [
    {
      question: 'O que faz a FigData Consulting?',
      answer:
        'Ela organiza dados, estrutura indicadores, cria análises e transforma informação em decisões mais rápidas, precisas e alinhadas ao negócio.',
    },
    {
      question: 'A FigData atende empresas de quais portes?',
      answer:
        'Atendemos desde empresas pequenas, com pouca estrutura de dados até empresas que já possuem equipes internas e querem acelerar a maturidade dos dados e execução.',
    },
    {
      question: 'Vocês implementam dashboards?',
      answer:
        "Sim. Desenvolvemos Dashboards executivos e operacionais utilizando Power BI. Além de apoiar na definição dos KPI's, execução e adoção por todo o time.",
    },
    {
      question: 'Como funciona o diagnóstico inicial?',
      answer:
        'Começamos entendendo objetivos, fontes de dados, fluxo decisório e gargalos atuais. A partir disso, definimos prioridades e um plano de ação.',
    },
    {
      question: 'Quanto tempo leva um projeto?',
      answer:
        'O prazo varia conforme a necessidade da sua empresa. Os projetos são personalizados e exclusivos pra atender o seu negócio. Temos projetos entregues em poucos dias, outros que levam um tempo maior.',
    },
    {
      question: 'É possível contratar por escopo?',
      answer:
        'Podemos atuar em frentes específicas, como diagnóstico, construção de dashboards, automação ou acompanhamento contínuo. Não é necessário a contratação para o ciclo completo.',
    },
    {
      question: 'Vocês trabalham com Inteligência Artificial?',
      answer:
        'Sim, utilizamos Copilot integrado com o Power BI. Sendo possível criar um app exclusivo de visualização para sua empresa com acesso em tempo real no seu celular. Com disparos automáticos e com insights.',
    },
  ] satisfies FaqItem[],
  footerLinks: {
    email: 'contato@figconsulting.com.br',
    whatsapp: '+55 (11) 97123-4401',
    linkedin: 'linkedin.com/company/figconsulting',
  },
  heroHighlights: [
    'Diagnóstico preciso da operação',
    'KPIs confiáveis para gestão',
    'Dashboards premium com leitura executiva',
  ],
  authority: [
    {
      icon: Gauge,
      title: 'Consultoria orientada por dados',
      description:
        'Diagnóstico técnico, priorização de alavancas e acompanhamento executivo em uma mesma entrega.',
    },
    {
      icon: Sparkles,
      title: 'Dados e visuais que geram valor',
      description:
        'Entregas pensadas para transformar informação em clareza, ação e vantagem competitiva.',
    },
    {
      icon: ChartColumnIncreasing,
      title: 'Execução orientada por impacto',
      description:
        'Dashboards, análises e automações conectados à rotina do time para acelerar resultados.',
    },
  ],
}
