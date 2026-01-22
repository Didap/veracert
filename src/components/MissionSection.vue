<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Target, TrendingUp, GraduationCap, FileCheck } from 'lucide-vue-next'
</script>

<template>
  <section id="mission" class="py-20 bg-primary text-primary-foreground">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <Badge variant="secondary" class="mb-4">La Nostra Mission</Badge>
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Trasmettere il Valore della Certificazione
          </h2>
          <p class="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Crediamo che la certificazione sia un investimento, non un costo.
            Il nostro obiettivo e aiutare le aziende a comprendere e sfruttare
            il vero valore della conformita.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-primary-foreground/10 backdrop-blur rounded-xl p-6">
            <Target class="h-8 w-8 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Miglioramento Continuo</h3>
            <p class="text-primary-foreground/80">
              La certificazione come strumento di miglioramento continuo dei processi e delle performance aziendali.
            </p>
          </div>

          <div class="bg-primary-foreground/10 backdrop-blur rounded-xl p-6">
            <TrendingUp class="h-8 w-8 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Vantaggio Competitivo</h3>
            <p class="text-primary-foreground/80">
              Trasformare la conformita in un vantaggio competitivo sul mercato di riferimento.
            </p>
          </div>

          <div class="bg-primary-foreground/10 backdrop-blur rounded-xl p-6">
            <GraduationCap class="h-8 w-8 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Formazione del Personale</h3>
            <p class="text-primary-foreground/80">
              Investire nella crescita professionale del personale attraverso formazione mirata e continua.
            </p>
          </div>

          <div class="bg-primary-foreground/10 backdrop-blur rounded-xl p-6">
            <FileCheck class="h-8 w-8 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Conformita Normativa</h3>
            <p class="text-primary-foreground/80">
              Comportamenti coerenti con leggi, norme e regolamenti per operare con serenita e sicurezza.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
