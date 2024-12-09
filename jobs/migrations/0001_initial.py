# Generated by Django 5.1.4 on 2024-12-09 09:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('csa_number', models.CharField(max_length=10, unique=True)),
                ('syspal_number', models.CharField(max_length=20)),
                ('order_number', models.CharField(max_length=10)),
                ('quantity', models.PositiveBigIntegerField(default=1)),
                ('description', models.TextField(max_length=60)),
                ('quote', models.TextField()),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('workshop_status', models.CharField(choices=[('Not Started', 'Not Started'), ('Ongoing', 'Ongoing'), ('Complete', 'Complete')], default='Not Started', max_length=20)),
                ('syspal_status', models.CharField(choices=[('Not Started', 'Not Started'), ('Ongoing', 'Ongoing'), ('Complete', 'Complete')], default='Not Started', max_length=20)),
                ('delivered', models.BooleanField(default=False)),
                ('delivered_date', models.DateField(blank=True, null=True)),
            ],
            options={
                'ordering': ['-date_created'],
            },
        ),
    ]